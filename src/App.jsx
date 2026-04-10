import { useEffect, useMemo, useRef, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import ProjectListView from './components/ProjectListView/ProjectListView'
import CreateProjectView from './components/CreateProjectView/CreateProjectView'
import AdminProfileView from './components/AdminProfileView/AdminProfileView'
import './App.css'

const STORAGE_KEY = 'admin_project_dashboard_v2'
const PROFILE_STORAGE_KEY = 'admin_profile_dashboard_v1'
const SKILL_OPTIONS = ['UI/UX', 'Figma', 'HTML', 'CSS', 'JavaScript', 'C#', 'Node.js']
const CATEGORY_OPTIONS = ['Designing', 'Development', 'Marketing', 'Research']
const STATUS_OPTIONS = ['Private', 'Team', 'Public']

const seedProjects = [
  {
    id: 'p1',
    title: 'Slack brand logo design',
    description: 'Create a brand logo design for a velzon admin theme.',
    icon: 'S',
    iconColor: '#f3e7c9',
    updatedAt: new Date().toISOString(),
    dueDate: '2026-07-10',
    tasksDone: 18,
    tasksTotal: 42,
    starred: false,
    team: ['AK', 'NP'],
    status: 'Private',
    category: 'Designing',
    skills: ['UI/UX', 'Figma'],
    thumbnail: '',
  },
  {
    id: 'p2',
    title: 'Redesign - Landing page',
    description: 'Redesign a landing page as per minimal design guidelines.',
    icon: 'L',
    iconColor: '#f5d6dc',
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    dueDate: '2026-05-18',
    tasksDone: 22,
    tasksTotal: 56,
    starred: true,
    team: ['SR', 'MM', 'ZH'],
    status: 'Team',
    category: 'Designing',
    skills: ['UI/UX', 'HTML', 'CSS'],
    thumbnail: '',
  },
  {
    id: 'p3',
    title: 'Chat Application',
    description: 'Build direct and group messaging modules for business use.',
    icon: 'C',
    iconColor: '#d7e8f4',
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    dueDate: '2026-06-02',
    tasksDone: 14,
    tasksTotal: 20,
    starred: true,
    team: ['AD'],
    status: 'Private',
    category: 'Development',
    skills: ['JavaScript', 'Node.js'],
    thumbnail: '',
  },
]

function getStoredProjects() {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return seedProjects
  }

  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : seedProjects
  } catch {
    return seedProjects
  }
}

function defaultProfile() {
  return {
    name: 'Anna Adame',
    role: 'Owner & Founder',
    location: 'California, United States',
    company: 'Themesbrand',
    followers: '24.3K',
    following: '1.3K',
  }
}

function getStoredProfile() {
  const raw = window.localStorage.getItem(PROFILE_STORAGE_KEY)
  if (!raw) {
    return defaultProfile()
  }

  try {
    const parsed = JSON.parse(raw)
    return {
      ...defaultProfile(),
      ...parsed,
    }
  } catch {
    return defaultProfile()
  }
}

function emptyForm() {
  return {
    title: '',
    description: '',
    status: 'Private',
    category: 'Designing',
    skills: ['UI/UX'],
    thumbnail: '',
    thumbnailName: '',
    extraImages: [],
  }
}

function toDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = () => reject(new Error('Unable to read file'))
    reader.readAsDataURL(file)
  })
}

function getUpdatedLabel(isoDate) {
  const now = new Date()
  const updated = new Date(isoDate)
  const diffMs = now - updated
  const hours = Math.floor(diffMs / (60 * 60 * 1000))
  const days = Math.floor(diffMs / (24 * 60 * 60 * 1000))

  if (hours < 24) {
    return `Updated ${Math.max(hours, 1)}hr${hours > 1 ? 's' : ''} ago`
  }

  if (days === 1) {
    return 'Updated yesterday'
  }

  return `Updated ${days} days ago`
}

function getFilterDateDays(filter) {
  if (filter === 'today') {
    return 0
  }
  if (filter === 'yesterday') {
    return 1
  }
  if (filter === 'this-week') {
    return 7
  }
  return null
}

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 1024)
  const [sidebarVisible, setSidebarVisible] = useState(() => window.innerWidth > 1024)
  const [projects, setProjects] = useState(() => getStoredProjects())
  const [profile, setProfile] = useState(() => getStoredProfile())
  const [search, setSearch] = useState('')
  const [dateFilter, setDateFilter] = useState('all')
  const [view, setView] = useState('list')
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(() => emptyForm())
  const [error, setError] = useState('')
  const descriptionRef = useRef(null)
  const wasMobileRef = useRef(window.innerWidth <= 1024)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile))
  }, [profile])

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 1024
      setIsMobile(mobile)

      if (wasMobileRef.current !== mobile) {
        setSidebarVisible(!mobile)
        wasMobileRef.current = mobile
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const filteredProjects = useMemo(() => {
    const term = search.trim().toLowerCase()
    const dateRange = getFilterDateDays(dateFilter)
    const now = Date.now()

    return projects
      .filter((project) => {
        const matchesSearch =
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term)

        if (!matchesSearch) {
          return false
        }

        if (dateRange === null) {
          return true
        }

        const diffDays = Math.floor(
          (now - new Date(project.updatedAt).getTime()) / (24 * 60 * 60 * 1000),
        )

        return dateRange === 0 ? diffDays === 0 : diffDays <= dateRange
      })
      .sort((a, b) => {
        if (a.starred !== b.starred) {
          return Number(b.starred) - Number(a.starred)
        }
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      })
  }, [projects, search, dateFilter])

  const openCreatePage = () => {
    setEditingId(null)
    setError('')
    setForm(emptyForm())
    setView('create')
  }

  const openEditPage = (project) => {
    setEditingId(project.id)
    setError('')
    setForm({
      title: project.title,
      description: project.description,
      status: project.status || 'Private',
      category: project.category || 'Designing',
      skills: project.skills?.length ? project.skills : ['UI/UX'],
      thumbnail: project.thumbnail || '',
      thumbnailName: project.thumbnail ? 'Uploaded image' : '',
      extraImages: project.extraImages || [],
    })
    setView('create')
  }

  const closeCreatePage = () => {
    setView('list')
    setError('')
  }

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id))
  }

  const toggleStar = (id) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id
          ? {
              ...project,
              starred: !project.starred,
              updatedAt: new Date().toISOString(),
            }
          : project,
      ),
    )
  }

  const toggleSkill = (skill) => {
    setForm((prev) => {
      const exists = prev.skills.includes(skill)
      const nextSkills = exists
        ? prev.skills.filter((item) => item !== skill)
        : [...prev.skills, skill]

      return {
        ...prev,
        skills: nextSkills.length > 0 ? nextSkills : [skill],
      }
    })
  }

  const applyDescriptionFormat = (prefix, suffix = '') => {
    const textarea = descriptionRef.current
    if (!textarea) {
      return
    }

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const current = form.description
    const selection = current.slice(start, end) || 'text'
    const nextValue =
      current.slice(0, start) + prefix + selection + suffix + current.slice(end)

    setForm((prev) => ({ ...prev, description: nextValue }))
  }

  const handleThumbnailChange = async (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    try {
      const dataUrl = await toDataUrl(file)
      setForm((prev) => ({
        ...prev,
        thumbnail: dataUrl,
        thumbnailName: file.name,
      }))
    } catch {
      setError('Unable to read the selected image file.')
    }
  }

  const handleExtraImagesChange = async (event) => {
    const files = Array.from(event.target.files || [])
    if (files.length === 0) {
      return
    }

    try {
      const uploads = await Promise.all(
        files.map(async (file) => ({
          name: file.name,
          url: await toDataUrl(file),
        })),
      )

      setForm((prev) => ({
        ...prev,
        extraImages: [...prev.extraImages, ...uploads],
      }))
      event.target.value = ''
    } catch {
      setError('Unable to read one or more selected image files.')
    }
  }

  const removeExtraImage = (index) => {
    setForm((prev) => ({
      ...prev,
      extraImages: prev.extraImages.filter((_, imageIndex) => imageIndex !== index),
    }))
  }

  const handleSaveProject = (event) => {
    event.preventDefault()

    if (!form.title.trim() || !form.description.trim()) {
      setError('Project title and description are required.')
      return
    }

    const existingProject = editingId
      ? projects.find((project) => project.id === editingId)
      : null

    const payload = {
      title: form.title.trim(),
      description: form.description.trim(),
      tasksDone: existingProject?.tasksDone ?? 0,
      tasksTotal: existingProject?.tasksTotal ?? 10,
      dueDate: existingProject?.dueDate ?? new Date().toISOString().slice(0, 10),
      team: existingProject?.team ?? ['NA'],
      updatedAt: new Date().toISOString(),
      status: form.status,
      category: form.category,
      skills: form.skills,
      thumbnail: form.thumbnail,
      extraImages: form.extraImages,
    }

    if (editingId) {
      setProjects((prev) =>
        prev.map((project) =>
          project.id === editingId
            ? {
                ...project,
                ...payload,
              }
            : project,
        ),
      )
    } else {
      setProjects((prev) => [
        {
          id: crypto.randomUUID(),
          icon: payload.title[0].toUpperCase(),
          iconColor: '#e3effd',
          starred: false,
          ...payload,
        },
        ...prev,
      ])
    }

    closeCreatePage()
  }

  return (
    <div className={`dashboard-shell ${sidebarVisible ? '' : 'sidebar-hidden'}`}>
      <Sidebar
        isVisible={sidebarVisible}
        view={view}
        onOpenDashboard={closeCreatePage}
        onOpenCreate={openCreatePage}
      />

      {isMobile && sidebarVisible && (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close menu"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      <main className="main-panel">
        <Topbar
          view={view}
          search={search}
          onSearchChange={setSearch}
          onToggleSidebar={() => setSidebarVisible((prev) => !prev)}
          onOpenProfile={() => setView('profile')}
          profileName={profile.name}
        />

        {view === 'list' && (
          <ProjectListView
            filteredProjects={filteredProjects}
            search={search}
            dateFilter={dateFilter}
            onSearchChange={setSearch}
            onDateFilterChange={setDateFilter}
            onAddNew={openCreatePage}
            onToggleStar={toggleStar}
            onEdit={openEditPage}
            onDelete={deleteProject}
            getUpdatedLabel={getUpdatedLabel}
            formatDate={formatDate}
          />
        )}

        {view === 'create' && (
          <CreateProjectView
            form={form}
            setForm={setForm}
            error={error}
            onSubmit={handleSaveProject}
            onCancel={closeCreatePage}
            onThumbnailChange={handleThumbnailChange}
            onExtraImagesChange={handleExtraImagesChange}
            onRemoveExtraImage={removeExtraImage}
            onToggleSkill={toggleSkill}
            onApplyDescriptionFormat={applyDescriptionFormat}
            categoryOptions={CATEGORY_OPTIONS}
            statusOptions={STATUS_OPTIONS}
            skillOptions={SKILL_OPTIONS}
            descriptionRef={descriptionRef}
            editingId={editingId}
          />
        )}

        {view === 'profile' && (
          <AdminProfileView projects={projects} profile={profile} onSaveProfile={setProfile} />
        )}
      </main>
    </div>
  )
}

export default App

import { useMemo, useState } from 'react'
import './AdminProfileView.css'

function AdminProfileView({ projects, profile, onSaveProfile }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(profile)

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const stats = useMemo(
    () => ({
      projects: projects.length,
      starred: projects.filter((project) => project.starred).length,
      images: projects.reduce(
        (count, project) => count + (project.extraImages?.length || 0),
        0,
      ),
    }),
    [projects],
  )

  return (
    <section className="profile-dashboard">
      <div className="profile-hero">
        <div className="profile-overlay" />

        <div className="profile-main">
          <div className="profile-avatar" aria-hidden="true">
            {initials}
          </div>

          <div className="profile-summary">
            <h2>{profile.name}</h2>
            <p className="profile-role">{profile.role}</p>
            <p className="profile-location">
              {profile.location} · {profile.company}
            </p>
          </div>
        </div>

        <div className="profile-stats">
          <div>
            <strong>{profile.followers}</strong>
            <span>Followers</span>
          </div>
          <div>
            <strong>{profile.following}</strong>
            <span>Following</span>
          </div>
        </div>
      </div>

      <div className="profile-nav-bar">
        <div className="profile-tabs" role="tablist" aria-label="Profile sections">
          <button
            type="button"
            className={`profile-tab ${activeTab === 'overview' ? 'active' : ''}`}
            role="tab"
            aria-selected={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`profile-tab ${activeTab === 'activities' ? 'active' : ''}`}
            role="tab"
            aria-selected={activeTab === 'activities'}
            onClick={() => setActiveTab('activities')}
          >
            Activities
          </button>
          <button
            type="button"
            className={`profile-tab ${activeTab === 'projects' ? 'active' : ''}`}
            role="tab"
            aria-selected={activeTab === 'projects'}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            type="button"
            className={`profile-tab ${activeTab === 'documents' ? 'active' : ''}`}
            role="tab"
            aria-selected={activeTab === 'documents'}
            onClick={() => setActiveTab('documents')}
          >
            Documents
          </button>
        </div>

        {!isEditing && (
          <button
            type="button"
            className="profile-edit-btn"
            onClick={() => {
              setDraft(profile)
              setIsEditing(true)
            }}
          >
            Edit Profile
          </button>
        )}
      </div>

      {isEditing && (
        <form
          className="profile-edit-form"
          onSubmit={(event) => {
            event.preventDefault()
            onSaveProfile(draft)
            setIsEditing(false)
          }}
        >
          <label>
            Name
            <input
              value={draft.name}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, name: event.target.value }))
              }
              required
            />
          </label>
          <label>
            Role
            <input
              value={draft.role}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, role: event.target.value }))
              }
              required
            />
          </label>
          <label>
            Location
            <input
              value={draft.location}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, location: event.target.value }))
              }
              required
            />
          </label>
          <label>
            Company
            <input
              value={draft.company}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, company: event.target.value }))
              }
              required
            />
          </label>
          <label>
            Followers
            <input
              value={draft.followers}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, followers: event.target.value }))
              }
              required
            />
          </label>
          <label>
            Following
            <input
              value={draft.following}
              onChange={(event) =>
                setDraft((prev) => ({ ...prev, following: event.target.value }))
              }
              required
            />
          </label>

          <div className="profile-edit-actions">
            <button
              type="button"
              className="profile-cancel-btn"
              onClick={() => {
                setDraft(profile)
                setIsEditing(false)
              }}
            >
              Cancel
            </button>
            <button type="submit" className="profile-save-btn">
              Save Profile
            </button>
          </div>
        </form>
      )}

      <div className="profile-panel" role="tabpanel">
        {activeTab === 'overview' && (
          <div className="profile-overview-grid">
            <article className="profile-kpi">
              <h4>Total Projects</h4>
              <p>{stats.projects}</p>
            </article>
            <article className="profile-kpi">
              <h4>Starred Projects</h4>
              <p>{stats.starred}</p>
            </article>
            <article className="profile-kpi">
              <h4>Uploaded Images</h4>
              <p>{stats.images}</p>
            </article>
          </div>
        )}

        {activeTab === 'activities' && (
          <ul className="profile-list">
            <li>Reviewed project status and team visibility settings.</li>
            <li>Updated project descriptions and attached files.</li>
            <li>Organized starred projects for weekly review.</li>
          </ul>
        )}

        {activeTab === 'projects' && (
          <ul className="profile-list">
            {projects.map((project) => (
              <li key={project.id}>
                <strong>{project.title}</strong>
                <span>
                  {project.status || 'Private'} · {project.category || 'Designing'}
                </span>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'documents' && (
          <ul className="profile-list">
            <li>Brand guideline.pdf</li>
            <li>Team onboarding checklist.docx</li>
            <li>Product roadmap Q3.xlsx</li>
          </ul>
        )}
      </div>
    </section>
  )
}

export default AdminProfileView

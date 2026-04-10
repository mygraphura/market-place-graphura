import './Sidebar.css'

function Sidebar({ isVisible, view, onOpenDashboard, onOpenCreate }) {
  return (
    <aside className={`sidebar ${isVisible ? 'open' : 'hidden'}`}>
      <h1 className="brand">Graphura</h1>
      <p className="menu-label">Menu</p>
      <nav className="menu-items">
        <button
          type="button"
          className={`menu-item ${view === 'list' ? 'active' : ''}`}
          onClick={onOpenDashboard}
        >
          Dashboard
        </button>
        <button
          type="button"
          className={`menu-item ${view === 'create' ? 'active' : ''}`}
          onClick={onOpenCreate}
        >
          Create Project
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar

import './ProjectCard.css'

function ProjectCard({ project, onToggleStar, onEdit, onDelete, getUpdatedLabel, formatDate }) {
  const extraImages = project.extraImages || []

  return (
    <article className="project-card">
      <div className="card-top">
        <p>{getUpdatedLabel(project.updatedAt)}</p>
        <button
          type="button"
          className={`star ${project.starred ? 'on' : ''}`}
          onClick={() => onToggleStar(project.id)}
          aria-label="Toggle star"
        >
          ★
        </button>
      </div>

      <div className="project-main">
        {project.thumbnail ? (
          <img className="thumb-preview" src={project.thumbnail} alt="Project thumbnail" />
        ) : (
          <span className="icon-pill" style={{ background: project.iconColor }}>
            {project.icon}
          </span>
        )}
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="meta-inline">
            <span>{project.status || 'Private'}</span>
            <span>{project.category || 'Designing'}</span>
          </div>
          {project.skills?.length > 0 && (
            <div className="card-tags">
              {project.skills.map((skill) => (
                <span key={`${project.id}-${skill}`} className="card-tag">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {extraImages.length > 0 && (
            <div className="card-gallery">
              {extraImages.slice(0, 4).map((image, index) => (
                <img
                  key={`${project.id}-extra-${index}`}
                  className="card-gallery-image"
                  src={image.url}
                  alt={image.name || `Project attachment ${index + 1}`}
                />
              ))}
              {extraImages.length > 4 && (
                <span className="gallery-more">+{extraImages.length - 4}</span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="card-actions">
        <button type="button" onClick={() => onEdit(project)}>
          Edit
        </button>
        <button type="button" className="danger" onClick={() => onDelete(project.id)}>
          Delete
        </button>
      </div>

      {/* <div className="card-bottom">
        <div className="avatars">
          {project.team.map((member) => (
            <span key={`${project.id}-${member}`}>{member}</span>
          ))}
        </div>
        <time>{formatDate(project.dueDate)}</time>
      </div> */}
    </article>
  )
}

export default ProjectCard

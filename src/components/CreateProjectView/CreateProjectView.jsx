import './CreateProjectView.css'

function CreateProjectView({
  form,
  setForm,
  error,
  onSubmit,
  onCancel,
  onThumbnailChange,
  onExtraImagesChange,
  onRemoveExtraImage,
  onToggleSkill,
  onApplyDescriptionFormat,
  categoryOptions,
  statusOptions,
  skillOptions,
  descriptionRef,
  editingId,
}) {
  return (
    <section className="content-area">
      <div className="content-header">
        <h2>Create Project</h2>
        <div className="breadcrumb">Projects / Create Project</div>
      </div>

      <form className="create-layout" onSubmit={onSubmit}>
        <div className="create-left">
          <section className="create-card">
            <label>
              Project Title
              <input
                placeholder="Enter project title"
                value={form.title}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, title: event.target.value }))
                }
              />
            </label>

            <label>
              Thumbnail Image
              <input type="file" accept="image/*" onChange={onThumbnailChange} />
              <small>{form.thumbnailName || 'No file chosen'}</small>
            </label>

            {form.thumbnail && (
              <img className="create-thumb" src={form.thumbnail} alt="Thumbnail preview" />
            )}

            <label>
              Project Description
              <div className="editor-toolbar">
                <button type="button" onClick={() => onApplyDescriptionFormat('**', '**')}>
                  B
                </button>
                <button type="button" onClick={() => onApplyDescriptionFormat('*', '*')}>
                  I
                </button>
                <button
                  type="button"
                  onClick={() => onApplyDescriptionFormat('[', '](https://)')}
                >
                  Link
                </button>
                <button type="button" onClick={() => onApplyDescriptionFormat('\n- ')}>
                  Bullet
                </button>
              </div>
              <textarea
                ref={descriptionRef}
                rows={10}
                placeholder="Write project description"
                value={form.description}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, description: event.target.value }))
                }
              />
            </label>

            <div className="attachments-section">
              <p className="attachments-title">Attached files</p>
              <p className="attachments-subtitle">Add Attached files here.</p>

              <label className="upload-dropzone">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={onExtraImagesChange}
                />
                <span className="upload-icon" aria-hidden="true">
                  ☁
                </span>
                <span>Drop files here or click to upload.</span>
              </label>

              {form.extraImages.length > 0 && (
                <div className="attachment-grid">
                  {form.extraImages.map((image, index) => (
                    <figure key={`${image.name}-${index}`} className="attachment-item">
                      <img src={image.url} alt={image.name} />
                      <figcaption>{image.name}</figcaption>
                      <button
                        type="button"
                        className="remove-attachment"
                        onClick={() => onRemoveExtraImage(index)}
                      >
                        Remove
                      </button>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="create-right">
          <section className="create-card">
            <h3>Privacy</h3>
            <label>
              Status
              <select
                value={form.status}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, status: event.target.value }))
                }
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section className="create-card">
            <h3>Tags</h3>
            <label>
              Categories
              <select
                value={form.category}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, category: event.target.value }))
                }
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <p className="chip-title">Skills</p>
            <div className="skill-chips">
              {skillOptions.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  className={`chip ${form.skills.includes(skill) ? 'active' : ''}`}
                  onClick={() => onToggleSkill(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </section>
        </div>

        {error && <p className="error form-error">{error}</p>}

        <div className="form-actions">
          <button type="button" className="ghost" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="add-button">
            {editingId ? 'Update Project' : 'Create Project'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateProjectView

export function Section({ id, children, className = '', label }) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`section ${className}`}
      tabIndex="-1"
    >
      <div className="page-shell">{children}</div>
    </section>
  )
}

export function SectionHeading({ index, eyebrow, title, note, className = '' }) {
  return (
    <header className={`section-heading ${className}`} data-reveal="up">
      <div className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__body">
        <h2>{title}</h2>
        {note && <p>{note}</p>}
      </div>
    </header>
  )
}

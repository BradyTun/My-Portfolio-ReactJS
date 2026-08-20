import { useState } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { ADDITIONAL_WORK, PROJECTS } from '../data/portfolio'
import { Section, SectionHeading } from './Section'

function ProjectArtwork({ project, compact = false }) {
  const hasProductEvidence = Boolean(project.artwork)

  return (
    <div
      className={`project-art ${compact ? 'project-art--compact' : ''} ${hasProductEvidence ? 'project-art--evidence' : ''}`}
      style={{
        '--project-background': project.palette.background,
        '--project-foreground': project.palette.foreground,
        '--project-accent': project.palette.accent,
      }}
      aria-hidden={hasProductEvidence ? undefined : true}
    >
      <div className="project-art__header">
        <span>Case / {project.id}</span>
        <span>{project.year}</span>
      </div>
      {hasProductEvidence ? (
        <>
          <div className="project-art__evidence-copy">
            <span>Public product preview</span>
            <strong>Verified talent. Direct work.</strong>
          </div>
          <img
            className="project-art__product"
            src={project.artwork}
            alt={project.artworkAlt}
            width="600"
            height="1160"
            loading="lazy"
          />
        </>
      ) : (
        <>
          <span className="project-art__line" />
          <span className="project-art__circle" />
          <span className="project-art__type">{project.shortName}</span>
          {project.logo && (
            <span className="project-art__logo">
              <img src={project.logo} alt="" width="96" height="96" loading="lazy" />
            </span>
          )}
        </>
      )}
      <div className="project-art__footer">
        <span>{project.category}</span>
        <span>Product dossier</span>
      </div>
    </div>
  )
}

function ProjectEvidence({ project }) {
  const details = [
    ['Challenge', project.challenge],
    ['My contribution', project.contribution],
    ['Outcome', project.outcome],
  ]

  return (
    <div className="project-evidence">
      {details.map(([label, value], index) => (
        <div key={label} className="project-evidence__item">
          <span>{String(index + 1).padStart(2, '0')} / {label}</span>
          <p>{value}</p>
        </div>
      ))}
    </div>
  )
}

function ProjectMeta({ project }) {
  return (
    <div className="project-meta">
      <div>
        <span>Role</span>
        <strong>{project.role}</strong>
      </div>
      <div>
        <span>Status</span>
        <strong>{project.status}</strong>
      </div>
      <div>
        <span>Stack</span>
        <ul aria-label={`${project.name} technology stack`}>
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

function FeaturedProject({ project }) {
  return (
    <article className="featured-project">
      <div className="featured-project__intro" data-reveal="up">
        <div className="project-kicker">
          <span>{project.id}</span>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
            aria-label={`View ${project.name} live product (opens in a new tab)`}
          >
            View live product <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
        <ProjectMeta project={project} />
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-art-link"
        aria-label={`Visit ${project.name} live product (opens in a new tab)`}
        data-cursor="Visit"
        data-reveal="up"
      >
        <ProjectArtwork project={project} />
      </a>
      <div className="featured-project__evidence" data-reveal="up">
        <ProjectEvidence project={project} />
      </div>
    </article>
  )
}

function ProjectDossier({ project }) {
  const [open, setOpen] = useState(false)
  const contentId = `project-${project.id}-details`

  return (
    <article
      className={`project-dossier ${open ? 'project-dossier--open' : ''}`}
      data-reveal="up"
    >
      <button
        type="button"
        className="project-dossier__trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={contentId}
        aria-label={`${open ? 'Collapse' : 'Expand'} ${project.name} case study`}
        data-cursor={open ? 'Close' : 'Open'}
      >
        <span className="project-dossier__index">{project.id}</span>
        <span className="project-dossier__title">
          <strong>{project.name}</strong>
          <small>{project.category} · {project.year}</small>
        </span>
        <span className="project-dossier__summary">{project.summary}</span>
        <span className="project-dossier__status">{project.status}</span>
        <span className="project-dossier__toggle" aria-hidden="true">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        id={contentId}
        className="project-dossier__details"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="project-dossier__details-inner">
          <div className="project-dossier__art">
            <ProjectArtwork project={project} compact />
          </div>
          <div className="project-dossier__content">
            <ProjectEvidence project={project} />
            <ProjectMeta project={project} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  const featuredProjects = PROJECTS.filter((project) => project.featured)
  const dossierProjects = PROJECTS.filter((project) => !project.featured)

  return (
    <Section id="work" label="Selected work" className="work-section">
      <SectionHeading
        index="01"
        eyebrow={`Projects & case studies / ${String(PROJECTS.length).padStart(2, '0')} projects`}
        title="Products for learning, work, finance, and growth."
        note="A selection of systems I have founded, led, architected, or shipped across the full product lifecycle."
      />

      <div className="featured-projects">
        {featuredProjects.map((project) => <FeaturedProject key={project.id} project={project} />)}
      </div>

      <div className="project-ledger" aria-label="Additional case studies">
        <div className="project-ledger__header">
          <span>More case studies</span>
          <span>Select a row to read the complete dossier</span>
        </div>
        {dossierProjects.map((project) => <ProjectDossier key={project.id} project={project} />)}
      </div>

      <div className="other-work" data-reveal="up">
        <div className="other-work__heading">
          <span>Other work</span>
          <h3>Smaller tools, same care.</h3>
        </div>
        <ol>
          {ADDITIONAL_WORK.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

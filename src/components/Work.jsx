import { useState } from 'react'
import { Section, SectionHeading } from './Section'

// ── Project data ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: '01',
    name: "Let's Tech Club",
    year: '2026',
    category: 'EdTech Platform',
    role: 'Founder & CEO',
    description:
      'A modern, specialized tech school and educational platform built to train the next generation of developers — curriculum, product, and infrastructure.',
    stack: ['Next.js', 'Django', 'PostgreSQL', 'AWS'],
    link: 'https://www.facebook.com/letstechclub',
    status: 'Launching Soon ✦',
    featured: true,
  },
  {
    id: '02',
    name: 'Sabai Job',
    year: '2025',
    category: 'Marketplace',
    role: 'Engineering & Product',
    description:
      "A pioneering platform connecting Myanmar's blue-collar workers with verified, equitable employment opportunities in Thailand.",
    stack: ['React', 'Django', 'PostgreSQL', 'Docker'],
    link: 'https://sabaijob.com',
    status: 'Live',
  },
  {
    id: '03',
    name: 'FinTech Exchange',
    year: '2025',
    category: 'Financial Infrastructure',
    role: 'System Architect',
    description:
      'A high-stakes, Binance-inspired P2P financial exchange platform. Details confidential — built for trust, throughput, and security under pressure.',
    stack: ['React', 'Django', 'PostgreSQL', 'AWS'],
    status: 'Confidential',
  },
  {
    id: '04',
    name: 'OSBAY MarTech Suite',
    year: '2026',
    category: 'Enterprise Product',
    role: 'Senior Software Engineer',
    description:
      'Automated lead-searching, market research, and conversion pipelines — marketing-technology products engineered for scale and reliability.',
    stack: ['Next.js', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
    status: 'In Production',
  },
  {
    id: '05',
    name: 'WHERE',
    year: '2026',
    category: 'Open Source',
    role: 'Founder',
    description:
      'An upcoming open-source networking platform — reimagining how people connect, share, and build community in the open.',
    stack: ['Next.js', 'PostgreSQL', 'Docker'],
    status: 'Upcoming',
  },
]

// ── ProjectRow ──────────────────────────────────────────────────────────────
// An editorial index row. Collapsed it reads as a clean line; on hover the
// description + stack expand, the title shifts, and an arrow advances.
function ProjectRow({ project }) {
  const [open, setOpen] = useState(false)

  const RowTag = project.link ? 'a' : 'div'
  const rowProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <RowTag
      {...rowProps}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      className={[
        'group block border-t cursor-pointer outline-none transition-all duration-500',
        'px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl',
        project.featured
          ? 'border-accent/50 bg-accent/[0.06] py-9 md:py-12'
          : 'border-ink-ghost py-8 md:py-10 hover:bg-surface/30',
      ].join(' ')}
    >
      {/* Top line — always visible */}
      <div className="flex items-baseline justify-between gap-6">
        <div className="flex items-baseline gap-5 md:gap-9 min-w-0">
          <span className="font-mono text-sm tracking-wider text-ink-faint flex-shrink-0">
            {project.id}
          </span>
          <div className="flex items-baseline gap-4 min-w-0 flex-wrap">
            <h3
              className={[
                'font-display font-light leading-none tracking-tight truncate',
                'text-[clamp(2.5rem,6vw,4.75rem)]',
                'transition-all duration-500 ease-expo-out',
                open ? 'text-ink translate-x-2' : 'text-ink',
              ].join(' ')}
            >
              {project.name}
            </h3>
            {/* Pending / Launching badge */}
            {project.featured && (
              <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-widest uppercase text-accent-dark border border-accent/60 rounded-full px-3 py-1.5 whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-dark" />
                </span>
                Launching Soon
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-5 md:gap-8 flex-shrink-0">
          <span className="hidden sm:block font-mono text-xs tracking-wider text-ink-muted uppercase">
            {project.category}
          </span>
          <span className={[
            'font-mono text-xs tracking-wider',
            project.featured ? 'text-accent-dark font-medium' : 'text-ink-faint',
          ].join(' ')}>
            {project.year}
          </span>
          <span
            className={[
              'text-ink-faint text-lg leading-none transition-all duration-500 ease-expo-out',
              open
                ? 'opacity-100 translate-x-0 text-ink'
                : 'opacity-0 -translate-x-2',
            ].join(' ')}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>

      {/* Expanding detail — grid-rows trick for smooth height animation */}
      <div
        className={[
          'grid transition-all duration-600 ease-expo-out',
          open ? 'grid-rows-[1fr] opacity-100 mt-7' : 'grid-rows-[0fr] opacity-0 mt-0',
        ].join(' ')}
      >
        <div className="overflow-hidden">
          <div className="pl-8 md:pl-[4.4rem] flex flex-col md:flex-row md:items-end justify-between gap-7">
            <p className="font-sans text-lg md:text-xl leading-[1.7] text-ink-muted max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-col gap-4 md:items-end flex-shrink-0">
              <span className="font-mono text-xs tracking-wider text-accent-dark uppercase">
                {project.role} · {project.status}
              </span>
              <div className="flex flex-wrap gap-2 md:justify-end max-w-xs">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs tracking-wide text-ink-muted border border-ink-ghost rounded-full px-3.5 py-1.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RowTag>
  )
}

export default function Work() {
  return (
    <Section id="work" label="Selected work">
      <SectionHeading
        index="01 — Work"
        eyebrow="Selected Projects"
        title="Systems built to be trusted, products built to scale."
      />
      <div className="border-b border-ink-ghost">
        {PROJECTS.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>

      {/* ── Additional Creations Segment ─────────────────────────────────── */}
      <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-y-8 gap-x-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs tracking-wider text-accent-dark uppercase">
            Active Ecosystem
          </span>
          <h4 className="font-display font-light text-2xl text-ink leading-tight mt-3">
            Other Deployments
          </h4>
        </div>
        <div className="md:col-span-8">
          <p className="font-sans text-lg text-ink-muted leading-[1.8] max-w-2xl mb-8">
            Beyond these major focus platforms, I have conceptualized, designed, 
            and deployed a constellation of specialized systems over the years, including:
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {[
              'Custom POS',
              'Modular LMS Platforms',
              'Advanced Telegram Bots & Automations',
              'Lead generation systems',
              'Market scraper arrays',
              'Direct-to-user utility tools',
            ].map((tool, idx) => (
              <span key={idx} className="flex items-center gap-2 font-display italic font-light text-xl text-ink">
                <span className="text-accent">✦</span> {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

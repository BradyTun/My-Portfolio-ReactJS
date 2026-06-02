import { Section, SectionHeading } from './Section'

// ── Data ────────────────────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    title: 'Engineering',
    items: ['Full-stack development', 'System architecture', 'Scalable infrastructure'],
  },
  {
    title: 'Stack',
    items: ['React · Next.js', 'Django · PostgreSQL', 'Docker · AWS'],
  },
  {
    title: 'Practice',
    items: ['AI-agent-driven dev', 'Project management', 'UX thinking · Product'],
  },
]

const DISCIPLINES = ['Gym', 'Archery', 'Chess', 'Guitar', 'Coffee', 'Arts']

export default function About() {
  return (
    <Section id="about" label="About">
      <SectionHeading
        index="02 — About"
        eyebrow="The Person Behind the Work"
        title="Precision as a discipline. Building as a craft."
      />

      <div className="grid lg:grid-cols-12 gap-y-16 gap-x-12">
        {/* ── Narrative ──────────────────────────────────────────────── */}
        <div className="lg:col-span-7 lg:col-start-1">
          <div className="space-y-9 max-w-2xl">
            <p className="font-display italic font-light text-ink leading-[1.4] text-[clamp(1.9rem,4vw,3rem)] tracking-tight">
              “I build at the intersection of deep system design and creative
              execution.”
            </p>
            <p className="font-sans text-lg md:text-xl leading-[1.8] text-ink-muted">
              I'm a software engineer and entrepreneur focused on full-stack
              development, system architecture, and the platforms that hold them
              together. I've led products from concept to production — automated
              market-research pipelines, financial exchanges, job marketplaces, and
              education platforms.
            </p>
            <p className="font-sans text-lg md:text-xl leading-[1.8] text-ink-muted">
              My work is shaped by an old-soul sensibility: the music of 1980–2010,
              a deep appreciation for coffee culture, and a daily routine built on
              intense focus and physical discipline. Modern tech execution, vintage
              temperament.
            </p>
          </div>
        </div>

        {/* ── Capabilities ───────────────────────────────────────────── */}
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="space-y-10">
            {CAPABILITIES.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-xs tracking-widest text-accent-dark uppercase mb-5">
                  {group.title}
                </h3>
                <ul className="space-y-3 list-none">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-display text-xl md:text-2xl text-ink leading-snug font-light"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Disciplines strip ────────────────────────────────────────── */}
      <div className="mt-24 pt-12 border-t border-ink-ghost">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-5">
          <span className="font-mono text-xs tracking-widest text-ink-muted uppercase mr-5">
            Off the keyboard
          </span>
          {DISCIPLINES.map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              <span className="font-display italic font-light text-ink text-3xl md:text-4xl">
                {item}
              </span>
              {i < DISCIPLINES.length - 1 && (
                <span className="text-accent" aria-hidden="true">
                  ✶
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}

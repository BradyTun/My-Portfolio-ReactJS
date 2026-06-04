import { Section, SectionHeading } from './Section'
import { Code2, Compass, Layers3, Rocket, Sparkles, Users, Wrench } from 'lucide-react'

// ── Data ────────────────────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    title: 'Engineering',
    Icon: Code2,
    items: ['Full-stack development', 'System architecture', 'Reliable infrastructure'],
  },
  {
    title: 'Stack',
    Icon: Layers3,
    items: ['React · Next.js', 'Django · PostgreSQL', 'Docker · AWS'],
  },
  {
    title: 'Practice',
    Icon: Sparkles,
    items: ['AI-assisted workflows', 'Project management', 'UX thinking · Product'],
  },
]

const FOCUS_POINTS = [
  {
    title: 'Build end to end',
    text: 'I enjoy taking products from rough ideas to stable releases.',
    Icon: Rocket,
  },
  {
    title: 'Keep systems clear',
    text: 'I prioritize architecture and code that teams can maintain.',
    Icon: Wrench,
  },
  {
    title: 'Contribute locally',
    text: 'I support developer communities through sharing and mentorship.',
    Icon: Users,
  },
]

const DISCIPLINES = ['Gym', 'Archery', 'Chess', 'Guitar', 'Coffee', 'Arts']

export default function About() {
  return (
    <Section id="about" label="About">
      <SectionHeading
        index="02 — About"
        eyebrow="The Person Behind the Work"
        title="Careful engineering, practical execution."
      />

      <div className="grid lg:grid-cols-12 gap-y-16 gap-x-12">
        {/* ── Narrative ──────────────────────────────────────────────── */}
        <div className="lg:col-span-7 lg:col-start-1">
          <div className="space-y-8 max-w-3xl">
            <p className="font-display italic font-light text-ink leading-[1.4] text-[clamp(1.9rem,4vw,3rem)] tracking-tight">
              “I like building useful software with care.”
            </p>
            <p className="font-sans text-lg md:text-xl leading-[1.8] text-ink-muted">
              I'm a software engineer and entrepreneur focused on dependable
              full-stack products, from early planning to production and ongoing
              improvement.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 md:gap-5 pt-1">
              {FOCUS_POINTS.map(({ title, text, Icon }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-ink-ghost bg-surface/35 px-4 py-5"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-canvas border border-ink-ghost text-accent-dark mb-3">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <h3 className="font-mono text-[0.65rem] tracking-wider uppercase text-ink mb-2">
                    {title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-ink-muted">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ── Capabilities ───────────────────────────────────────────── */}
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="space-y-10">
            {CAPABILITIES.map(({ title, items, Icon }) => (
              <div key={title}>
                <h3 className="font-mono text-xs tracking-widest text-accent-dark uppercase mb-5 inline-flex items-center gap-2.5">
                  <Icon size={14} aria-hidden="true" />
                  {title}
                </h3>
                <ul className="space-y-3 list-none">
                  {items.map((item) => (
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
          <span className="font-mono text-xs tracking-widest text-ink-muted uppercase mr-5 inline-flex items-center gap-2">
            <Compass size={13} aria-hidden="true" className="text-accent-dark" />
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

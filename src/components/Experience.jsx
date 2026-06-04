import { Section, SectionHeading } from './Section'

// ── Experience data ─────────────────────────────────────────────────────────
const ROLES = [
  {
    period: '2025 — Present',
    role: 'CEO & Founder',
    org: "Let's Tech Club",
    type: 'Founder',
    description:
      'Founded and run a tech education club focused on practical training for aspiring developers.',
  },
  {
    period: '2025 — Present',
    role: 'Senior Software Engineer',
    org: 'OSBAY',
    type: 'Engineering',
    description:
      'Build MarTech tools for lead research, market analysis, and conversion workflows, with a focus on reliability.',
  },
  {
    period: '2023 — 2025',
    role: 'Founder',
    org: 'Code Mal Youth Org',
    type: 'Community',
    description:
      'Started a youth coding community and shared beginner-friendly resources to help more students learn to code.',
  },
  {
    period: '2023 — 2024',
    role: 'Chief Technology Officer',
    org: 'Sa Map',
    type: 'Leadership',
    description:
      'Served as CTO in a youth entrepreneurship organization, supporting product direction and technical decisions.',
  },
  {
    period: 'Before 2023',
    role: 'Freelance Dev, Intern & Junior/Mid Roles',
    org: 'Various Organizations',
    type: 'Foundations',
    description:
      'Worked across freelance projects, internships, and junior-to-mid engineering roles that built my technical foundation.',
  },
]

export default function Experience() {
  return (
    <Section id="experience" label="Experience" className="bg-surface/40">
      <SectionHeading
        index="03 — Path"
        eyebrow="Experience Timeline"
        title="Always a Beginner."
      />

      <div>
        {ROLES.map((role, i) => (
          <div
            key={role.org}
            className="group grid md:grid-cols-12 gap-y-3 gap-x-8 items-start border-t border-ink-ghost py-9 md:py-11 transition-colors duration-500"
          >
            {/* Period */}
            <div className="md:col-span-3">
              <span className="font-mono text-xs md:text-sm tracking-wider text-ink-muted">
                {role.period}
              </span>
            </div>

            {/* Role + Org */}
            <div className="md:col-span-5">
              <h3 className="font-display font-light text-ink leading-tight tracking-tight text-[clamp(1.9rem,3.4vw,2.75rem)]">
                {role.role}
              </h3>
              <p className="font-sans text-base md:text-lg text-accent-dark mt-1.5">
                {role.org}
              </p>
            </div>

            {/* Description */}
            <div className="md:col-span-4">
              <p className="font-sans text-base md:text-lg leading-[1.7] text-ink-muted">
                {role.description}
              </p>
              <span className="inline-block mt-4 font-mono text-xs tracking-wider text-ink-faint uppercase">
                {role.type}
              </span>
            </div>
          </div>
        ))}
        <div className="border-t border-ink-ghost" />
      </div>
    </Section>
  )
}

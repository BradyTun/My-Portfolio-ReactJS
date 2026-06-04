import { Section } from './Section'
import { ArrowUpRight, Code2, Layers3, Mail, Users } from 'lucide-react'

// ── Links ───────────────────────────────────────────────────────────────────
const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/BradyTun/', Icon: Code2 },
  { label: 'Facebook', href: 'https://www.facebook.com/kyawkokotun888/', Icon: Users },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kyawkokotun/', Icon: Layers3 },
]

const EMAIL = 'kyawkokotun888@gmail.com'

export default function Contact() {
  return (
    <Section id="contact" label="Contact" className="pb-0">
      {/* Eyebrow */}
      <div className="flex items-center gap-5 mb-14">
        <span className="font-mono text-xs md:text-sm tracking-wider text-accent-dark">
          04 — Contact
        </span>
        <span className="font-mono text-xs md:text-sm tracking-widest text-ink-muted uppercase">
          Say Hello
        </span>
        <span className="flex-1 h-px bg-ink-ghost" />
      </div>

      {/* Giant CTA */}
      <a
        href={`mailto:${EMAIL}`}
        className="group block max-w-5xl"
        aria-label={`Email ${EMAIL}`}
      >
        <h2 className="font-display font-light text-ink leading-[0.95] tracking-tightest text-[clamp(2.75rem,9vw,8rem)]">
          Want to
          <br />
          talk<span className="text-accent">?</span>
        </h2>
        <span className="inline-flex items-center gap-4 mt-10 font-sans text-base md:text-lg text-ink-muted group-hover:text-ink transition-colors duration-400">
          <Mail size={16} aria-hidden="true" className="text-accent-dark" />
          {EMAIL}
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-400 ease-expo-out group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </span>
      </a>

      {/* Socials */}
      <div className="mt-24 flex flex-wrap gap-x-12 gap-y-4">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 font-sans text-base md:text-lg text-ink-muted hover:text-ink transition-colors duration-300 tracking-wide"
          >
            <Icon size={15} aria-hidden="true" className="text-accent-dark" />
            {label}
            <span className="absolute -bottom-0.5 left-0 w-full h-px bg-ink scale-x-0 origin-left transition-transform duration-300 ease-expo-out group-hover:scale-x-100" />
          </a>
        ))}
      </div>
    </Section>
  )
}

// ── Footer ──────────────────────────────────────────────────────────────────
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-8 md:px-16 lg:px-24 py-12 mt-26 border-t border-ink-ghost">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-mono text-[0.6rem] tracking-wider text-ink-faint uppercase">
          © {year} Kyaw Ko Ko Tun
        </span>
        <span className="font-mono text-[0.6rem] tracking-wider text-ink-faint uppercase">
          Designed &amp; built with care
        </span>
        <a
          href="#home"
          className="font-mono text-[0.6rem] tracking-wider text-ink-muted hover:text-ink uppercase transition-colors duration-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

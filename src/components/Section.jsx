import { useReveal } from '../hooks/useReveal'

// ── Section ─────────────────────────────────────────────────────────────────
// A consistent section shell: generous vertical rhythm, max-width content rail,
// and a fade-up reveal applied to the whole block on scroll-in.
export function Section({ id, children, className = '', label }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id={id}
      ref={ref}
      aria-label={label}
      className={[
        'px-8 md:px-16 lg:px-24 py-26 md:py-34',
        'transition-all duration-800 ease-expo-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className,
      ].join(' ')}
    >
      {children}
    </section>
  )
}

// ── SectionHeading ──────────────────────────────────────────────────────────
// Editorial section header: a mono eyebrow with an index number, a thin rule,
// and a large serif title. Used to open every major section consistently.
export function SectionHeading({ index, eyebrow, title, className = '' }) {
  return (
    <div className={['mb-16 md:mb-24', className].join(' ')}>
      <div className="flex items-center gap-5 mb-8">
        {index && (
          <span className="font-mono text-xs md:text-sm tracking-wider text-accent-dark">
            {index}
          </span>
        )}
        <span className="font-mono text-xs md:text-sm tracking-widest text-ink-muted uppercase">
          {eyebrow}
        </span>
        <span className="flex-1 h-px bg-ink-ghost" />
      </div>
      <h2 className="font-display font-light text-ink leading-[1.02] tracking-tighter text-balance max-w-5xl text-[clamp(2.75rem,7vw,5.75rem)]">
        {title}
      </h2>
    </div>
  )
}

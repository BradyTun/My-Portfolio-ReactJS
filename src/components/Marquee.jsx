// ── Marquee ─────────────────────────────────────────────────────────────────
// A large, slow-scrolling band of keywords in display serif. Breaks up the
// page rhythm and injects movement between text-heavy sections. Pauses on hover.
const ITEMS = [
  'Full-Stack Engineering',
  'System Architecture',
  'Product Design',
  'AI Agents',
  'Scalable Infrastructure',
  'UX Thinking',
  'Entrepreneurship',
]

export default function Marquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const sequence = [...ITEMS, ...ITEMS]

  return (
    <div
      className="marquee border-y border-ink-ghost py-8 md:py-10 select-none"
      aria-hidden="true"
    >
      <div className="marquee__track">
        {sequence.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display font-light italic text-ink text-[clamp(2rem,5vw,4rem)] leading-none tracking-tight px-8 md:px-12">
              {item}
            </span>
            <span className="text-accent text-[clamp(1rem,2vw,1.75rem)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

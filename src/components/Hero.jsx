// ── Hero Section ────────────────────────────────────────────────────────────
// Three-zone editorial layout:
//   TOP    — eyebrow label + establishment year
//   CENTER — display name (serif, massive) + one-line descriptor
//   BOTTOM — CTAs + location
//
// Staggered entrance: each zone fades up with a sequential delay,
// giving the page a sense of intentional, unhurried reveal.
// ────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between px-8 md:px-16 lg:px-24 pt-36 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* ── Decorative oversized ghost monogram ──────────────────────────── */}
      <span
        className="pointer-events-none absolute -right-10 md:right-6 top-[16%] font-display italic text-outline leading-none select-none hidden md:block"
        style={{ fontSize: 'clamp(16rem, 30vw, 34rem)' }}
        aria-hidden="true"
      >
        K
      </span>

      {/* ── TOP: Eyebrow ─────────────────────────────────────────────────── */}
      <div
        className="relative flex items-center justify-between animate-fade-in animate-fill-both"
        style={{ animationDelay: '80ms' }}
      >
        <span className="font-mono text-xs md:text-sm tracking-widest text-ink-muted uppercase">
          Software Engineer &amp; Entrepreneur
        </span>
        <span className="font-mono text-xs tracking-wider text-ink-faint hidden sm:flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          Available for select work
        </span>
      </div>

      {/* ── CENTER: Name + Descriptor ────────────────────────────────────── */}
      <div className="relative flex flex-col">
        {/* Display name — Cormorant Garamond, viewport-relative size */}
        <div className="overflow-hidden">
          <h1
            className="font-display font-light text-ink leading-[0.85] tracking-tightest animate-fade-up animate-fill-both"
            style={{
              fontSize: 'clamp(3.75rem, 12vw, 12rem)',
              animationDelay: '180ms',
            }}
          >
            Kyaw Ko Ko
          </h1>
        </div>
        {/* "Tun." in italic — the editorial pause, the confident full stop */}
        <div className="overflow-hidden">
          <h1
            className="font-display font-light italic text-ink leading-[0.85] tracking-tightest animate-fade-up animate-fill-both"
            style={{
              fontSize: 'clamp(3.75rem, 12vw, 12rem)',
              animationDelay: '280ms',
            }}
          >
            Tun<span className="text-accent">.</span>
          </h1>
        </div>

        {/* Divider + descriptor */}
        <div
          className="flex items-start gap-6 md:gap-8 mt-14 animate-fade-up animate-fill-both"
          style={{ animationDelay: '480ms' }}
        >
          {/* Thin structural line — a visual breath between name and copy */}
          <div className="w-12 h-px bg-accent mt-[0.95rem] flex-shrink-0" />
          <p className="font-display text-ink-muted leading-[1.45] max-w-3xl text-[clamp(1.35rem,2.6vw,2rem)] font-light">
            Building scalable things while actively building 
            and nurturing local developer communities.
          </p>
        </div>
      </div>

      {/* ── BOTTOM: CTAs + Location ──────────────────────────────────────── */}
      <div
        className="relative flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 animate-fade-up animate-fill-both"
        style={{ animationDelay: '660ms' }}
      >
        {/* Primary + secondary CTA */}
        <div className="flex items-center gap-8 md:gap-12">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 font-sans text-base md:text-lg font-medium text-ink"
          >
            <span className="relative">
              View Work
              <span className="absolute -bottom-1 left-0 w-full h-px bg-ink scale-x-100 origin-left transition-transform duration-400 ease-expo-out group-hover:scale-x-0" />
            </span>
            <span className="inline-block transition-transform duration-400 ease-expo-out group-hover:translate-x-1.5">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="font-sans text-base md:text-lg text-ink-muted hover:text-ink transition-colors duration-400"
          >
            Get in Touch
          </a>
        </div>

        {/* Location — mono, grounding */}
        <span className="font-mono text-xs tracking-wider text-ink-faint uppercase">
          Rangoon, Myanmar · GMT+6:30
        </span>
      </div>
    </section>
  )
}

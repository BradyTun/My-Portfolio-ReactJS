// ── Hero Section ────────────────────────────────────────────────────────────
// Three-zone editorial layout:
//   TOP    — eyebrow label + establishment year
//   CENTER — display name (serif, massive) + one-line descriptor
//   BOTTOM — CTAs + location
//
// Staggered entrance: each zone fades up with a sequential delay,
// giving the page a sense of intentional, unhurried reveal.
// ────────────────────────────────────────────────────────────────────────────

import mePhoto from '../assets/me.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] px-8 md:px-16 lg:px-24 pt-28 md:pt-32 lg:pt-28 pb-12 overflow-hidden"
      aria-label="Introduction"
    >
      {/* ── Decorative oversized ghost monogram ──────────────────────────── */}
      <span
        className="pointer-events-none absolute -right-10 lg:right-10 top-[16%] font-display italic text-outline leading-none select-none hidden md:block"
        style={{ fontSize: 'clamp(16rem, 30vw, 34rem)' }}
        aria-hidden="true"
      >
        K
      </span>

      <div className="relative z-10 mx-auto w-full max-w-[1380px]">
        {/* ── TOP: Eyebrow ───────────────────────────────────────────────── */}
        <div
          className="flex items-center justify-between animate-fade-in animate-fill-both"
          style={{ animationDelay: '80ms' }}
        >
          <span className="font-mono text-xs md:text-sm tracking-widest text-ink-muted uppercase">
            Software Engineer &amp; Community Builder
          </span>
          <span className="font-mono text-xs tracking-wider text-ink-faint hidden sm:flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            Open to new work
          </span>
        </div>

        {/* ── CENTER: Headline + Portrait ───────────────────────────────── */}
        <div className="mt-10 lg:mt-12 grid lg:grid-cols-12 items-start gap-y-10 lg:gap-x-8 xl:gap-x-12">
          <div className="lg:col-span-8 xl:col-span-7">
            {/* Display name — Cormorant Garamond, viewport-relative size */}
            <div className="overflow-hidden">
              <h1
                className="font-display font-light text-ink leading-[0.84] tracking-tightest animate-fade-up animate-fill-both"
                style={{
                  fontSize: 'clamp(3.45rem, 10.5vw, 10.75rem)',
                  animationDelay: '180ms',
                }}
              >
                Kyaw Ko Ko
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1
                className="font-display font-light italic text-ink leading-[0.84] tracking-tightest animate-fade-up animate-fill-both"
                style={{
                  fontSize: 'clamp(3.45rem, 10.5vw, 10.75rem)',
                  animationDelay: '260ms',
                }}
              >
                Tun<span className="text-accent">.</span>
              </h1>
            </div>

            {/* Divider + descriptor */}
            <div
              className="flex items-start gap-6 md:gap-8 mt-10 md:mt-12 animate-fade-up animate-fill-both"
              style={{ animationDelay: '360ms' }}
            >
              <div className="w-12 h-px bg-accent mt-[0.95rem] flex-shrink-0" />
              <p className="font-display text-ink-muted leading-[1.45] max-w-2xl text-[clamp(1.2rem,2.3vw,1.8rem)] font-light">
                I build scalable things and plan to give
                local dev communities everything I have.
              </p>
            </div>
          </div>

          <div
            className="lg:col-span-4 xl:col-span-5 lg:justify-self-end animate-fade-up animate-fill-both"
            style={{ animationDelay: '420ms' }}
          >
            <div className="relative w-[min(72vw,18rem)] sm:w-[17rem] md:w-[18rem] lg:w-[clamp(17rem,23vw,21rem)] aspect-square mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-full bg-accent/15 blur-3xl opacity-60"
                aria-hidden="true"
              />
              <img
                src={mePhoto}
                alt="Portrait of Kyaw Ko Ko Tun"
                className="relative w-full h-full object-contain opacity-95 drop-shadow-[0_22px_28px_rgba(0,0,0,0.18)]"
                style={{
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 66%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 66%, rgba(0,0,0,0) 100%)',
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* ── BOTTOM: CTAs + Location ───────────────────────────────────── */}
        <div
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 animate-fade-up animate-fill-both"
          style={{ animationDelay: '520ms' }}
        >
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

          <span className="font-mono text-xs tracking-wider text-ink-faint uppercase">
            Rangoon, Myanmar · GMT+6:30
          </span>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'

// Sections tracked for active-state + the overlay menu.
const NAV_LINKS = [
  { href: '#work', label: 'Work', id: 'work', index: '01' },
  { href: '#about', label: 'About', id: 'about', index: '02' },
  { href: '#experience', label: 'Experience', id: 'experience', index: '03' },
  { href: '#contact', label: 'Contact', id: 'contact', index: '04' },
]

// ── Live clock (Yangon, GMT+6:30) ───────────────────────────────────────────
function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Yangon',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      setTime(now)
    }
    tick()
    const id = setInterval(tick, 1000 * 30)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const time = useClock()

  // Scroll: progress bar + condensed state.
  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? top / height : 0)
      setScrolled(top > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking.
  useEffect(() => {
    const ids = ['home', ...NAV_LINKS.map((l) => l.id)]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* ── Scroll progress line (very top) ──────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-transparent">
        <div
          className="h-full bg-accent-dark origin-left transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* ── Top bar ──────────────────────────────────────────────────────── */}
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50',
          'flex items-center justify-between',
          'px-8 md:px-16 lg:px-24',
          'transition-all duration-500 ease-expo-out',
          scrolled
            ? 'py-4 bg-canvas/80 backdrop-blur-xl border-b border-ink-ghost'
            : 'py-7 border-b border-transparent',
        ].join(' ')}
      >
        {/* Wordmark — monogram flips to a star on hover */}
        <a
          href="#home"
          aria-label="Back to top"
          className="group flex items-center gap-3 text-ink"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-full border border-ink-ghost overflow-hidden">
            <span className="font-display text-lg leading-none transition-transform duration-500 ease-expo-out group-hover:-translate-y-8">
              K
            </span>
            <span className="absolute font-display text-base leading-none text-accent-dark translate-y-8 transition-transform duration-500 ease-expo-out group-hover:translate-y-0">
              ✦
            </span>
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block font-mono text-[0.62rem] tracking-widest uppercase text-ink-muted">
              Kyaw Ko Ko Tun
            </span>
            <span className="block font-mono text-[0.62rem] tracking-widest uppercase text-ink-faint">
              Builder · Scaler
            </span>
          </span>
        </a>

        {/* Center pill — desktop active-section nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-ink-ghost bg-canvas/50 backdrop-blur-sm px-2 py-1.5"
        >
          {NAV_LINKS.map(({ href, label, id }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={href}
                className={[
                  'relative px-4 py-1.5 rounded-full font-sans text-sm tracking-wide transition-colors duration-300',
                  isActive ? 'text-canvas' : 'text-ink-muted hover:text-ink',
                ].join(' ')}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-ink" />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            )
          })}
        </nav>

        {/* Right cluster — clock + menu trigger */}
        <div className="flex items-center gap-5">
          <span className="hidden lg:flex items-center gap-2 font-mono text-[0.62rem] tracking-wider text-ink-faint uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {time} RGN
          </span>

          {/* Menu trigger (mobile overlay) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="group flex flex-col items-end gap-1.5 md:hidden"
          >
            <span
              className={[
                'block h-px bg-ink transition-all duration-400 ease-expo-out',
                menuOpen ? 'w-6 translate-y-[3.5px] rotate-45' : 'w-6',
              ].join(' ')}
            />
            <span
              className={[
                'block h-px bg-ink transition-all duration-400 ease-expo-out',
                menuOpen
                  ? 'w-6 -translate-y-[3.5px] -rotate-45'
                  : 'w-4 group-hover:w-6',
              ].join(' ')}
            />
          </button>
        </div>
      </header>

      {/* ── Full-screen overlay menu (mobile) ────────────────────────────── */}
      <div
        className={[
          'fixed inset-0 z-40 md:hidden',
          'bg-canvas/98 backdrop-blur-xl',
          'transition-all duration-500 ease-expo-out',
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <nav className="flex flex-col justify-center h-full px-8 gap-2">
          {NAV_LINKS.map(({ href, label, index }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={[
                'group flex items-baseline gap-5 py-3 border-b border-ink-ghost',
                'transition-all duration-500 ease-expo-out',
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
              style={{ transitionDelay: menuOpen ? `${120 + i * 70}ms` : '0ms' }}
            >
              <span className="font-mono text-xs text-accent-dark">{index}</span>
              <span className="font-display font-light text-ink text-5xl tracking-tight group-hover:italic transition-all duration-300">
                {label}
              </span>
            </a>
          ))}
          <span className="mt-10 font-mono text-[0.62rem] tracking-widest text-ink-faint uppercase">
            {time} · Rangoon, Myanmar
          </span>
        </nav>
      </div>
    </>
  )
}

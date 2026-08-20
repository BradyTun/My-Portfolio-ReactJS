import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import resumePdf from '../../cv/Kyaw-Ko-Ko-Tun-CV.pdf?url'
import { PROFILE } from '../data/portfolio'

const NAV_LINKS = [
  { href: '#work', label: 'Work', id: 'work', index: '01' },
  { href: '#experience', label: 'Experience', id: 'experience', index: '02' },
  { href: '#about', label: 'About', id: 'about', index: '03' },
  { href: '#contact', label: 'Contact', id: 'contact', index: '04' },
]

function useClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Yangon',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      )
    }

    tick()
    const timer = window.setInterval(tick, 30000)
    return () => window.clearInterval(timer)
  }, [])

  return time
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const progressRef = useRef(null)
  const wordmarkRef = useRef(null)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const menuRef = useRef(null)
  const time = useClock()

  useEffect(() => {
    let frame
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 24)
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
      frame = undefined
    }

    const onScroll = () => {
      if (frame !== undefined) return
      frame = window.requestAnimationFrame(updateScroll)
    }

    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== undefined) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const sections = ['home', ...NAV_LINKS.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const backgroundElements = [
      document.querySelector('.skip-link'),
      document.querySelector('.site-nav'),
      document.getElementById('main-content'),
      document.querySelector('.site-footer'),
    ].filter(Boolean)
    const menuItems = Array.from(
      menuRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? [],
    )
    const focusable = menuItems.filter(Boolean)
    closeButtonRef.current?.focus()
    backgroundElements.forEach((element) => {
      element.inert = true
      element.setAttribute('aria-hidden', 'true')
    })

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        window.requestAnimationFrame(() => menuButtonRef.current?.focus())
        return
      }

      if (event.key !== 'Tab' || !focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const containFocus = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        event.stopPropagation()
        closeButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('focusin', containFocus)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('focusin', containFocus)
      backgroundElements.forEach((element) => {
        element.inert = false
        element.removeAttribute('aria-hidden')
      })
    }
  }, [menuOpen])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 900px)')
    const closeAtDesktop = (event) => {
      if (!event.matches || !menuOpen) return
      setMenuOpen(false)
      window.requestAnimationFrame(() => wordmarkRef.current?.focus())
    }

    desktop.addEventListener('change', closeAtDesktop)
    return () => desktop.removeEventListener('change', closeAtDesktop)
  }, [menuOpen])

  const closeMenu = (href) => {
    setMenuOpen(false)
    window.setTimeout(() => {
      if (href?.startsWith('#')) {
        document.getElementById(href.slice(1))?.focus({ preventScroll: true })
      } else {
        menuButtonRef.current?.focus()
      }
    }, 0)
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} style={{ transform: 'scaleX(0)' }} />
      </div>

      <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''} ${menuOpen ? 'site-nav--menu-open' : ''}`}>
        <div className="page-shell site-nav__inner">
          <a
            ref={wordmarkRef}
            href="#home"
            className="wordmark"
            aria-label="Kyaw Ko Ko Tun, back to top"
          >
            <span className="wordmark__monogram">KKT</span>
            <span className="wordmark__name">
              Kyaw Ko Ko Tun
              <small>Portfolio / 2026</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_LINKS.map(({ href, id, label }) => (
              <a key={id} href={href} aria-current={active === id ? 'location' : undefined}>
                {label}
              </a>
            ))}
          </nav>

          <div className="site-nav__actions">
            <span className="local-time" aria-label={`${time}, local time in ${PROFILE.location}`}>
              {time} RGN
            </span>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
              aria-label="View résumé (opens in a new tab)"
            >
              Résumé <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="menu-toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={21} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <div className="page-shell mobile-menu__inner">
          <div className="mobile-menu__topbar">
            <button
              ref={closeButtonRef}
              type="button"
              className="menu-toggle mobile-menu__close"
              aria-label="Close menu"
              onClick={() => {
                setMenuOpen(false)
                window.requestAnimationFrame(() => menuButtonRef.current?.focus())
              }}
            >
              <X size={21} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation links">
            {NAV_LINKS.map(({ href, label, index }) => (
              <a key={href} href={href} onClick={() => closeMenu(href)}>
                <span>{index}</span>
                {label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__footer">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => closeMenu()}
              aria-label="View résumé (opens in a new tab)"
            >
              View résumé <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p>
              {PROFILE.location} · {time} · {PROFILE.timezone}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

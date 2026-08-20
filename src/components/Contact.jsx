import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { PROFILE } from '../data/portfolio'
import { Section } from './Section'

export default function Contact() {
  const [copyState, setCopyState] = useState('idle')
  const resetTimerRef = useRef()

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), [])

  const copyEmail = async () => {
    window.clearTimeout(resetTimerRef.current)
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
    resetTimerRef.current = window.setTimeout(() => setCopyState('idle'), 2400)
  }

  const copyFeedback = copyState === 'copied'
    ? `Email address copied: ${PROFILE.email}`
    : copyState === 'error'
      ? 'Could not copy the email address. Use the email link above instead.'
      : ''

  return (
    <Section id="contact" label="Contact" className="contact-section">
      <div className="contact-heading" data-reveal="up">
        <span>04 / Say hello</span>
        <span>{PROFILE.location}</span>
      </div>

      <div className="contact-layout" data-reveal="up">
        <div>
          <h2>
            Have a hard
            <br />
            product problem<span>?</span>
          </h2>
          <p className="contact-question">Want to talk?</p>
        </div>

        <div className="contact-copy">
          <p>Open to product, engineering, and community conversations.</p>
          <a href={`mailto:${PROFILE.email}`} className="contact-email">
            <Mail size={18} aria-hidden="true" />
            {PROFILE.email}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button type="button" onClick={copyEmail}>
            {copyState === 'copied' ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
            {copyState === 'copied' ? 'Email copied' : copyState === 'error' ? 'Copy unavailable' : 'Copy email'}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copyFeedback}
          </span>
        </div>
      </div>

      <nav className="social-ledger" aria-label="Social links" data-reveal="up">
        {PROFILE.socials.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} (opens in a new tab)`}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {social.label}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </Section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="page-shell">
        <span>© {year} {PROFILE.name}</span>
        <span>Designed &amp; built with care</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

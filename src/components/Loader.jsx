import { useEffect, useState } from 'react'
import { PROFILE } from '../data/portfolio'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!visible) return undefined

    const previousOverflow = document.body.style.overflow
    const siteContent = document.getElementById('site-content')
    let holdTimer
    let readyFrame
    let safeguardTimer
    let hasFinished = false

    document.body.style.overflow = 'hidden'
    document.body.classList.add('is-loading')
    if (siteContent) {
      siteContent.inert = true
      siteContent.setAttribute('aria-hidden', 'true')
    }

    const finishLoading = () => {
      if (hasFinished) return
      hasFinished = true
      window.clearTimeout(safeguardTimer)
      readyFrame = window.requestAnimationFrame(() => {
        setReady(true)
        holdTimer = window.setTimeout(() => setVisible(false), 1000)
      })
    }

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading, { once: true })
    }

    // A third-party stylesheet or other load-blocking request must never leave
    // the portfolio inaccessible. Normal visits still wait for load + 1 second.
    safeguardTimer = window.setTimeout(finishLoading, 6000)

    return () => {
      window.removeEventListener('load', finishLoading)
      window.clearTimeout(holdTimer)
      window.clearTimeout(safeguardTimer)
      window.cancelAnimationFrame(readyFrame)
      document.body.style.overflow = previousOverflow
      document.body.classList.remove('is-loading')
      if (siteContent) {
        siteContent.inert = false
        siteContent.removeAttribute('aria-hidden')
      }
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`fullscreen-loader ${ready ? 'fullscreen-loader--ready' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={ready ? 'Portfolio ready' : 'Loading portfolio resources'}
    >
      <div className="fullscreen-loader__panel fullscreen-loader__panel--top" />
      <div className="fullscreen-loader__panel fullscreen-loader__panel--bottom" />

      <div className="fullscreen-loader__content">
        <div className="fullscreen-loader__topline">
          <span>KKT / Portfolio 2026</span>
          <span>{ready ? 'System ready' : 'Loading resources'}</span>
        </div>

        <div className="fullscreen-loader__center">
          <div className="fullscreen-loader__mark" aria-hidden="true">
            {['K', 'K', 'T'].map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ '--letter-index': index }}>
                {letter}
              </span>
            ))}
          </div>
          <p>{PROFILE.loaderGreeting}</p>
        </div>

        <div className="fullscreen-loader__bottomline">
          <span>{PROFILE.location} / {PROFILE.timezone}</span>
          <div className="fullscreen-loader__progress" aria-hidden="true">
            <span />
          </div>
          <span>{ready ? 'Enter' : 'Please wait'}</span>
        </div>
      </div>
    </div>
  )
}

import { ArrowDown, ArrowUpRight } from 'lucide-react'
import mePhoto from '../assets/me.png'
import resumePdf from '../../cv/Kyaw-Ko-Ko-Tun-CV.pdf?url'
import { PROFILE } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="page-shell">
        <div className="hero__masthead">
          <p>Portfolio / 2026</p>
          <p>{PROFILE.role}</p>
          <p>{PROFILE.location}</p>
        </div>

        <div className="hero__layout">
          <div className="hero__copy">
            <p className="availability-line">
              <span aria-hidden="true" />
              {PROFILE.availability}
            </p>

            <h1>
              <span className="hero__name">{PROFILE.name}</span>
              <span className="hero__headline">
                <span>{PROFILE.headline[0]}</span>
                <em>{PROFILE.headline[1]}</em>
              </span>
            </h1>

            <div className="hero__introduction">
              <p>{PROFILE.introduction}</p>
              <div className="hero__actions">
                <a href="#work" className="button button--primary">
                  Explore the work <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                  aria-label="View résumé (opens in a new tab)"
                >
                  View résumé <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <figure className="portrait-card">
            <div className="portrait-card__stage">
              <span className="portrait-card__monogram" aria-hidden="true">
                K
              </span>
              <img
                src={mePhoto}
                alt="Portrait of Kyaw Ko Ko Tun"
                width="500"
                height="500"
                loading="eager"
              />
              <span className="portrait-card__index">No. 01</span>
            </div>
            <figcaption>
              <span>Builder · Scaler</span>
              <span>
                {PROFILE.location} · {PROFILE.timezone}
              </span>
            </figcaption>
          </figure>
        </div>

        <ul className="proof-rail" aria-label="Professional highlights">
          {PROFILE.proofPoints.map((point, index) => (
            <li key={point}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

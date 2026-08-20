import { OPERATING_RANGE } from '../data/portfolio'

export default function Marquee() {
  return (
    <section className="operating-range" aria-label="Areas of focus">
      <div className="page-shell operating-range__inner">
        <div className="operating-range__label" data-reveal="up">
          <span>Operating range</span>
          <p>Where engineering craft meets product judgement.</p>
        </div>
        <ol>
          {OPERATING_RANGE.map((item, index) => (
            <li key={item} data-reveal="up">
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

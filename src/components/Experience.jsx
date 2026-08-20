import { EXPERIENCE } from '../data/portfolio'
import { Section, SectionHeading } from './Section'

export default function Experience() {
  return (
    <Section id="experience" label="Experience" className="experience-section">
      <SectionHeading
        index="02"
        eyebrow="Experience timeline"
        title="Learning, leading, and shipping."
        note="A path through engineering, product leadership, education, and community building."
      />

      <ol className="experience-ledger">
        {EXPERIENCE.map((item, index) => (
          <li
            key={`${item.org}-${item.role}`}
            className="experience-row"
            data-reveal="up"
          >
            <span className="experience-row__number">{String(index + 1).padStart(2, '0')}</span>
            <time>{item.period}</time>
            <div className="experience-row__role">
              <h3>{item.role}</h3>
              <div>
                {item.logo && (
                  <img src={item.logo} alt="" width="32" height="32" loading="lazy" />
                )}
                <span>{item.org}</span>
              </div>
            </div>
            <div className="experience-row__detail">
              <p>{item.description}</p>
              <span>{item.type}</span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

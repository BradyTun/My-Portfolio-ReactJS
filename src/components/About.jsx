import { CAPABILITIES, DISCIPLINES, FOCUS_POINTS } from '../data/portfolio'
import { Section, SectionHeading } from './Section'

export default function About() {
  return (
    <Section id="about" label="About" className="about-section">
      <SectionHeading
        index="03"
        eyebrow="The person behind the work"
        title="Careful engineering, practical execution."
      />

      <div className="about-intro" data-reveal="up">
        <blockquote>“I like building useful software with care.”</blockquote>
        <div className="about-intro__copy">
          <p>
            I&apos;m a software engineer and product builder focused on dependable full-stack
            systems. I work across product planning, architecture, delivery, and the steady
            improvement that follows a launch.
          </p>
        </div>
      </div>

      <div className="principles" aria-label="Working principles">
        {FOCUS_POINTS.map((item, index) => (
          <article
            key={item.title}
            data-reveal="up"
            style={{ '--reveal-delay': `${index * 65}ms` }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="capability-ledger" data-reveal="up">
        <div className="capability-ledger__title">
          <span>Core skills</span>
          <h3>A practical toolkit for taking products end to end.</h3>
        </div>
        <div className="capability-ledger__groups">
          {CAPABILITIES.map((group, groupIndex) => (
            <div key={group.title} className="capability-group">
              <div>
                <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                <h4>{group.title}</h4>
              </div>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="off-keyboard" data-reveal="up">
        <span>Off the keyboard</span>
        <ul>
          {DISCIPLINES.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </Section>
  )
}

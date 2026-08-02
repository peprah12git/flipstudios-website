import { ArrowRightIcon } from './Icons'
import { PlaceholderThumb } from './PlaceholderThumb'
import { BrowserFrame } from './BrowserFrame'
import { Reveal, RevealItem } from './Reveal'
import './Projects.css'

const PROJECTS = [
  {
    name: 'Clima',
    tag: 'Smart Weather',
    text: 'A minimalist weather experience that blends accuracy with elegance, delivering real-time forecasts in a calm, modern interface.',
  },
  {
    name: 'NovaCart',
    tag: 'AI-Powered E-Commerce',
    text: 'An intelligent shopping platform that personalizes product discovery and automates the buying journey through adaptive AI.',
  },
  {
    name: 'Pulse',
    tag: 'Data Visualization',
    text: 'A data visualization web-app that simplifies complex datasets.',
  },
]

function Projects() {
  return (
    <section id="studios" className="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <span className="eyebrow">Our Work</span>
            <h2>Explore FlipStudios</h2>
            <p>We transform digital ideas to impactful experiences.</p>
          </div>
          <a href="#studios" className="projects__view-all">
            View all <ArrowRightIcon width={16} height={16} />
          </a>
        </div>

        <div className="projects__list">
          {PROJECTS.map((p, i) => (
            <Reveal
              as="article"
              className={`project-row ${i % 2 ? 'is-reverse' : ''}`}
              key={p.name}
            >
              <RevealItem className="project-row__frame-wrap">
                <BrowserFrame
                  url={`flipstudios.app/${p.name.toLowerCase()}`}
                  className="project-row__frame"
                >
                  <PlaceholderThumb
                    label={p.name[0]}
                    index={i}
                    className="project-row__thumb"
                  />
                </BrowserFrame>
              </RevealItem>

              <RevealItem className="project-row__text">
                {p.tag ? <span className="project-row__tag">{p.tag}</span> : null}
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </RevealItem>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

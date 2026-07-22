import { ArrowRightIcon } from './Icons'
import './Projects.css'

const PROJECTS = [
  {
    name: 'Clima',
    tag: 'Smart Weather',
    text: 'A minimalist weather experience that blends accuracy with elegance, delivering real-time forecasts in a calm, modern interface.',
    gradient: 'linear-gradient(135deg, #f4d35e 0%, #8a5a2b 60%, #2b1d0e 100%)',
  },
  {
    name: 'NovaCart',
    tag: 'AI-Powered E-Commerce',
    text: 'An intelligent shopping platform that personalizes product discovery and automates the buying journey through adaptive AI.',
    gradient: 'linear-gradient(135deg, #6b7280 0%, #374151 60%, #111827 100%)',
  },
  {
    name: 'Pulse',
    tag: '',
    text: 'A data visualization web-app that simplifies complex datasets.',
    gradient: 'linear-gradient(135deg, #22314f 0%, #1a2a52 50%, #0e3b52 100%)',
  },
]

function Projects() {
  return (
    <section id="studios" className="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <h2>Explore FlipStudios</h2>
            <p>We transform digital ideas to impactful experiences.</p>
          </div>
          <a href="#studios" className="projects__view-all">
            View all <ArrowRightIcon width={16} height={16} />
          </a>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.name}>
              <div className="project-card__thumb" style={{ background: p.gradient }} />
              <h3>
                {p.name}
                {p.tag ? <span> — {p.tag}</span> : null}
              </h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

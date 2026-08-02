import './Hero.css'
import { Reveal, RevealItem } from './Reveal'
import { BrowserFrame } from './BrowserFrame'
import { ArrowRightIcon } from './Icons'

function HeroMockup() {
  return (
    <div className="hero-mock" aria-hidden="true">
      <div className="hero-mock__tabs">
        <span className="hero-mock__tab is-active">Overview</span>
        <span className="hero-mock__tab">Analytics</span>
        <span className="hero-mock__tab">Settings</span>
      </div>

      <div className="hero-mock__stats">
        <div className="hero-mock__stat">
          <span className="hero-mock__stat-label">Requests / day</span>
          <span className="hero-mock__stat-value">••••••</span>
        </div>
        <div className="hero-mock__stat">
          <span className="hero-mock__stat-label">Avg. response</span>
          <span className="hero-mock__stat-value">••ms</span>
        </div>
      </div>

      <svg
        className="hero-mock__chart"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
      >
        <polyline points="0,90 50,72 100,80 150,45 200,60 250,32 300,50 350,20 400,34" />
        <circle cx="350" cy="20" r="4" className="is-accent" />
      </svg>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero bg-dot-grid">
      <div className="container hero__row">
        <Reveal className="hero__content">
          <RevealItem as="span" className="eyebrow">
            FlipStudios
          </RevealItem>
          <RevealItem as="h1">Build better software for your business</RevealItem>
          <RevealItem as="p">
            Empowering organizations with targeted digital transformations that
            drive growth, streamline operations, and create long-term impact.
          </RevealItem>
          <RevealItem className="hero__actions">
            <a href="#packages" className="btn">
              Checkout our packages
            </a>
            <a href="#studios" className="btn btn--secondary">
              See our work <ArrowRightIcon width={16} height={16} />
            </a>
          </RevealItem>
        </Reveal>

        <Reveal className="hero__visual">
          <RevealItem>
            <BrowserFrame url="app.flipstudios.dev" className="hero__frame">
              <HeroMockup />
            </BrowserFrame>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero

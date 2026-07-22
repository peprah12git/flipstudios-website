import './Hero.css'
import heroBg from '../../images/ChatGPT Image Nov 11, 2025, 11_10_38 AM 1.png'

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__content">
        <h1>
          Build better software <br /> for your business
        </h1>
        <p>
          Empowering organizations with targeted digital transformations that
          drive growth, streamline operations, and create long-term impact.
        </p>
        <a href="#packages" className="btn">
          Checkout our packages
        </a>
      </div>
      <svg className="hero__network" viewBox="0 0 1200 260" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          points="0,220 180,150 360,190 560,90 760,160 960,110 1200,170"
          fill="none"
          stroke="url(#network-gradient)"
          strokeWidth="1.5"
        />
        <polyline
          points="0,180 220,210 420,120 620,180 860,80 1050,150 1200,120"
          fill="none"
          stroke="url(#network-gradient)"
          strokeWidth="1"
          opacity="0.6"
        />
        {[
          [180, 150], [360, 190], [560, 90], [760, 160], [960, 110],
          [220, 210], [420, 120], [620, 180], [860, 80], [1050, 150],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#e3f27a" />
        ))}
        <defs>
          <linearGradient id="network-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e3f27a" stopOpacity="0" />
            <stop offset="50%" stopColor="#e3f27a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e3f27a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}

export default Hero

import { RocketIcon, ShieldIcon, TrendingUpIcon, DevicesIcon, SparkleIcon } from './Icons'
import { Reveal, RevealItem } from './Reveal'
import './OptimizeFor.css'

const ITEMS = [
  {
    icon: RocketIcon,
    title: 'Performance',
    lead: 'We leverage modern technologies in our build process ',
    bold: 'optimized for efficiency and speed',
    tail: '.',
  },
  {
    icon: ShieldIcon,
    title: 'Enterprise-Grade Security',
    lead: 'We implement top-tier security protocols, ensuring ',
    bold: 'data protection, system integrity',
    tail: ' and regular security updates.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Scalable & Future-Proof',
    lead: 'Our solutions grow with you using cutting-edge technologies like ',
    bold: 'React, Next.js, Qt, Flutter',
    tail: ' and AI-driven enhancements.',
  },
  {
    icon: DevicesIcon,
    title: 'Cross-Platform',
    lead: 'We develop applications that work flawlessly ',
    bold: 'across web, mobile and desktop',
    tail: ' environments, ensuring consistency.',
  },
  {
    icon: SparkleIcon,
    title: 'AI-Powered',
    lead: 'We leverage AI to optimize your applications, improving ',
    bold: 'efficiency, automation, and decision making',
    tail: ' capabilities.',
  },
]

function OptimizeFor() {
  return (
    <section id="products" className="optimize bg-dot-grid">
      <div className="container">
        <span className="eyebrow optimize__eyebrow">What We Optimize For</span>
        <h2 className="section-heading">What we optimize our projects for</h2>
        <Reveal className="optimize__list">
          {ITEMS.map(({ icon: Icon, title, lead, bold, tail }) => (
            <RevealItem className="optimize__card" key={title}>
              <span className="optimize__icon">
                <Icon width={26} height={26} />
              </span>
              <div className="optimize__text">
                <h3>{title}</h3>
                <p>
                  {lead}
                  <strong>{bold}</strong>
                  {tail}
                </p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default OptimizeFor

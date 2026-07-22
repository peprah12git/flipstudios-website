import { RocketIcon, ShieldIcon, TrendingUpIcon, DevicesIcon, SparkleIcon } from './Icons'
import optimizeBg from '../../images/optimize.png'
import './OptimizeFor.css'

const ITEMS = [
  {
    icon: RocketIcon,
    title: 'Performance',
    text: 'We leverage modern technologies in our build process optimized for efficiency and speed.',
  },
  {
    icon: ShieldIcon,
    title: 'Enterprise-Grade Security',
    text: 'We implement top-tier security protocols, ensuring data protection, system integrity and regular security updates.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Scalable & Future-Proof',
    text: 'Our solutions grow with you using cutting-edge technologies like React, Next.js, Qt, Flutter and AI-driven enhancements.',
  },
  {
    icon: DevicesIcon,
    title: 'Cross-Platform',
    text: 'We develop applications that work flawlessly across web, mobile and desktop environments, ensuring consistency.',
  },
  {
    icon: SparkleIcon,
    title: 'AI-Powered',
    text: 'We leverage AI to optimize your applications, improving efficiency, automation, and decision making capabilities.',
  },
]

function OptimizeFor() {
  return (
    <section
      id="products"
      className="optimize"
      style={{ backgroundImage: `url(${optimizeBg})` }}
    >
      <div className="optimize__overlay" aria-hidden="true" />
      <div className="optimize__pattern" aria-hidden="true" />
      <div className="container">
        <h2 className="section-heading optimize__heading">What we optimize our projects for.</h2>
        <div className="optimize__list">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <div className={`optimize__row ${i % 2 ? 'is-reverse' : ''}`} key={title}>
              <div className="optimize__text">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="optimize__icon">
                <Icon width={30} height={30} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OptimizeFor

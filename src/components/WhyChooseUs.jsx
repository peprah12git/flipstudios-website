import { RocketIcon, WrenchIcon, DollarIcon, ChatIcon, HandshakeIcon } from './Icons'
import './WhyChooseUs.css'

const ITEMS = [
  {
    icon: RocketIcon,
    title: 'Ultra-Fast Delivery',
    text: 'We finish projects in the shortest time possible. We deliver complete business websites within 21 to 28 days.',
  },
  {
    icon: WrenchIcon,
    title: 'Support & Optimization',
    text: 'We stay with you with continuous technical support, performance improvements, security patches, and feature upgrades.',
  },
  {
    icon: DollarIcon,
    title: 'Cost-Effective Solutions',
    text: 'We have lots of packages in every section. Packages include one-time development, subscriptions, and custom add-on.',
  },
  {
    icon: ChatIcon,
    title: 'Transparent & Reliable',
    text: 'We have project tracking systems providing detailed project insights, ensuring complete transparency.',
  },
  {
    icon: HandshakeIcon,
    title: 'Customer-Centric Approach',
    text: 'Your wish is our command. We build projects that align exactly with your goals. We do not compromise.',
  },
]

function WhyChooseUs() {
  return (
    <section id="solutions" className="why">
      <div className="container">
        <h2 className="section-heading">Why choose us as your software development partner</h2>
        <div className="why__grid">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div className="why__card" key={title}>
              <span className="why__icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

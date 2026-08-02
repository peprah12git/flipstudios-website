import { RocketIcon, WrenchIcon, DollarIcon, ChatIcon, HandshakeIcon, CheckIcon } from './Icons'
import { RingArt, RowsArt, NetworkArt } from './WhyIllustrations'
import { Reveal, RevealItem } from './Reveal'
import './WhyChooseUs.css'

const ITEMS = [
  {
    icon: RocketIcon,
    title: 'Ultra-Fast Delivery',
    lead: 'We finish projects in the shortest time possible. We deliver complete business websites ',
    bold: 'within 21 to 28 days',
    tail: '.',
    art: <RingArt icon={RocketIcon} />,
  },
  {
    icon: WrenchIcon,
    title: 'Support & Optimization',
    lead: 'We stay with you with ',
    bold: 'continuous technical support',
    tail: ', performance improvements, security patches, and feature upgrades.',
    checklist: ['Performance improvements', 'Security patches', 'Feature upgrades'],
  },
  {
    icon: DollarIcon,
    title: 'Cost-Effective Solutions',
    lead: 'We have lots of packages in every section. Packages include ',
    bold: 'one-time development, subscriptions',
    tail: ', and custom add-on.',
    art: <RowsArt variant="pricing" />,
  },
  {
    icon: ChatIcon,
    title: 'Transparent & Reliable',
    lead: 'We have project tracking systems providing ',
    bold: 'detailed project insights',
    tail: ', ensuring complete transparency.',
    art: <RowsArt variant="tracker" />,
  },
  {
    icon: HandshakeIcon,
    title: 'Customer-Centric Approach',
    lead: 'Your wish is our command. We build projects that ',
    bold: 'align exactly with your goals',
    tail: '. We do not compromise.',
    art: <NetworkArt />,
  },
]

function WhyChooseUs() {
  return (
    <section id="solutions" className="why">
      <div className="container">
        <span className="eyebrow why__eyebrow">Why FlipStudios</span>
        <h2 className="section-heading">Why choose us as your software development partner</h2>
        <Reveal className="why__grid">
          {ITEMS.map(({ icon: Icon, title, lead, bold, tail, art, checklist }) => (
            <RevealItem className="why__card" key={title}>
              <header className="why__header">
                <span className="why__icon">
                  <Icon width={20} height={20} />
                </span>
                <h3>{title}</h3>
              </header>

              <p className="why__text">
                {lead}
                <strong>{bold}</strong>
                {tail}
              </p>

              {checklist ? (
                <ul className="why__checklist">
                  {checklist.map((item) => (
                    <li key={item}>
                      <CheckIcon width={13} height={13} />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                art
              )}
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default WhyChooseUs

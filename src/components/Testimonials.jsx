import { QuoteIcon, CheckBadgeIcon } from './Icons'
import { Reveal, RevealItem } from './Reveal'
import michaelPhoto from '../../images/man.png'
import lindaPhoto from '../../images/linda.png'
import abigailPhoto from '../../images/Abigail Tetteh.png'
import './Testimonials.css'

// Placeholder handles generated from each name — swap in real @handles when available.
const TESTIMONIALS = [
  {
    name: 'Abigail Tetteh',
    handle: '@abigailtetteh',
    role: 'Product Lead, FinCore Solutions',
    quote:
      'FlipStudios helped us design and deploy our fintech app with incredible precision. Their UX team understood our audience perfectly, and the devs delivered a smooth, secure platform.',
    photo: abigailPhoto,
    area: 'a',
  },
  {
    name: 'Kofi Armah',
    handle: '@kofiarmah',
    role: 'CEO, ShopEase Africa',
    quote:
      'They didn’t just build an online store - they built an experience. Sales went up, bounce rates went down, and our customers keep coming back. Couldn’t ask for a better partner!',
    initials: 'KA',
    area: 'b',
  },
  {
    name: 'Michael Smith',
    handle: '@michaelsmith',
    role: 'Founder, AgroLink Tech',
    quote:
      'FlipStudios brought our vision to life faster than we imagined. Their attention to detail and ability to merge creativity with technology set them apart. We now have a product our users genuinely love.',
    photo: michaelPhoto,
    area: 'c',
  },
  {
    name: 'Samuel Adu',
    handle: '@samueladu',
    role: 'IT Coordinator, Mnotify',
    quote:
      'We needed a partner who could translate complex requirements into a simple, scalable system — FlipStudios did exactly that. Their professionalism and technical expertise were outstanding.',
    initials: 'SA',
    area: 'd',
  },
  {
    name: 'Linda Mensah',
    handle: '@lindamensah',
    role: 'Operations Manager, BlueWave Logistics',
    quote:
      'Our logistics workflows were held together with spreadsheets before FlipStudios stepped in. Now everything is tracked in real time, and our dispatch team saves hours every single day.',
    photo: lindaPhoto,
    area: 'e',
  },
  {
    name: 'Nanayaa Agyeman',
    handle: '@nanayaaagyeman',
    role: 'Co-Founder, EduPro Systems',
    quote:
      'This was our third project with FlipStudios, and they’ve never disappointed. They communicate clearly, deliver on time, and continuously improve based on feedback. True long-term partners.',
    initials: 'NA',
    area: 'f',
  },
]

function TestimonialCard({ t }) {
  return (
    <RevealItem
      as="article"
      className={`testimonial-card testimonial-card--${t.area}`}
    >
      <header className="testimonial-card__header">
        <span className="testimonial-card__avatar">
          {t.photo ? (
            <img src={t.photo} alt="" />
          ) : (
            <span className="testimonial-card__initials">{t.initials}</span>
          )}
        </span>
        <div className="testimonial-card__identity">
          <span className="testimonial-card__name">
            {t.name}
            <CheckBadgeIcon aria-hidden="true" />
          </span>
          <span className="testimonial-card__meta">
            {t.handle} · {t.role}
          </span>
        </div>
      </header>

      <blockquote className="testimonial-card__quote">{t.quote}</blockquote>

      <footer className="testimonial-card__footer">
        <QuoteIcon width={16} height={13} aria-hidden="true" />
      </footer>
    </RevealItem>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <span className="eyebrow testimonials__eyebrow">Testimonials</span>
        <h2 className="section-heading testimonials__heading">
          What our clients say about us
        </h2>
        <Reveal className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard t={t} key={t.name} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Testimonials

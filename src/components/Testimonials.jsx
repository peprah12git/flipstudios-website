import { QuoteIcon } from './Icons'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    initials: 'AT',
    name: 'Abigail Torkor',
    role: 'Product Lead, FinCore Solutions',
    quote:
      'FlipStudios helped us design and deploy our fintech app with incredible precision. Their UX team understood our audience perfectly, and the devs delivered a smooth, scalable product.',
  },
  {
    initials: 'SA',
    name: 'Samuel Adu',
    role: 'IT Coordinator, Mintify',
    quote:
      'We needed a partner who could translate complex requirements into a simple, scalable system — FlipStudios did exactly that. Their professionalism and technical expertise were outstanding.',
  },
  {
    initials: 'LM',
    name: 'Liala Mensah',
    role: 'Operations Manager, BlueGrid',
    quote:
      'From the first call, they understood our vision. Their attention to detail with every screen and every interaction has genuinely impressed our users.',
  },
  {
    initials: 'KA',
    name: 'Kofi Amoah',
    role: 'CEO, ShopEase Africa',
    quote:
      'They didn’t just build online store — they built an experience. Sales went up, bounce rates went down, and our customers keep coming back. Couldn’t ask for a better partner.',
  },
  {
    initials: 'MO',
    name: 'Michael Owusu',
    role: 'Founder, AgroTech',
    quote:
      'FlipStudios brought our vision to life faster than we imagined. Their attention to detail and commitment to quality technology and our product are genuinely rare.',
  },
  {
    initials: 'NA',
    name: 'Nnenya Agyeman',
    role: 'Co-Founder, EduPro Systems',
    quote:
      'This was our third project with FlipStudios, and they’ve never disappointed. They communicate clearly, deliver on time, and continuously improve based on feedback. True long-term partners.',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-heading testimonials__heading">
          What Our Clients Say About Us
        </h2>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-card__avatar">{t.initials}</div>
              <QuoteIcon className="testimonial-card__quote-icon" />
              <p>{t.quote}</p>
              <div className="testimonial-card__author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

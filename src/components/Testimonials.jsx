import { QuoteIcon } from './Icons'
import michaelPhoto from '../../images/man.png'
import lindaPhoto from '../../images/linda.png'
import abigailPhoto from '../../images/Abigail Tetteh.png'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    variant: 'photo',
    gridColumn: 1,
    gridRow: '1 / span 2',
    name: 'Abigail Tetteh',
    role: 'Product Lead, FinCore Solutions',
    quote:
      'FlipStudios helped us design and deploy our fintech app with incredible precision. Their UX team understood our audience perfectly, and the devs delivered a smooth, secure platform.',
    background: `url(${abigailPhoto})`,
  },
  {
    variant: 'quote',
    gridColumn: 2,
    gridRow: '1 / span 1',
    name: 'Kofi Armah',
    role: 'CEO, ShopEase Africa',
    quote:
      'They didn’t just build an online store - they built an experience. Sales went up, bounce rates went down, and our customers keep coming back. Couldn’t ask for a better partner!',
    initials: 'KA',
  },
  {
    variant: 'photo',
    gridColumn: 3,
    gridRow: '1 / span 2',
    name: 'Michael Smith',
    role: 'Founder, AgroLink Tech',
    quote:
      'FlipStudios brought our vision to life faster than we imagined. Their attention to detail and ability to merge creativity with technology set them apart. We now have a product our users genuinely love.',
    background: `url(${michaelPhoto})`,
  },
  {
    variant: 'quote',
    gridColumn: 1,
    gridRow: '3 / span 1',
    name: 'Samuel Adu',
    role: 'IT Coordinator, Mnotify',
    quote:
      'We needed a partner who could translate complex requirements into a simple, scalable system — FlipStudios did exactly that. Their professionalism and technical expertise were outstanding.',
    initials: 'SA',
  },
  {
    variant: 'photo',
    gridColumn: 2,
    gridRow: '2 / span 2',
    name: 'Linda Mensah',
    role: 'Operations Manager, BlueWave Logistics',
    quote:
      'Our logistics workflows were held together with spreadsheets before FlipStudios stepped in. Now everything is tracked in real time, and our dispatch team saves hours every single day.',
    background: `url(${lindaPhoto})`,
  },
  {
    variant: 'quote',
    gridColumn: 3,
    gridRow: '3 / span 1',
    name: 'Nanayaa Agyeman',
    role: 'Co-Founder, EduPro Systems',
    quote:
      'This was our third project with FlipStudios, and they’ve never disappointed. They communicate clearly, deliver on time, and continuously improve based on feedback. True long-term partners.',
    initials: 'NA',
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
          {TESTIMONIALS.map((t) =>
            t.variant === 'photo' ? (
              <div
                className="testimonial-card testimonial-card--photo"
                style={{ gridColumn: t.gridColumn, gridRow: t.gridRow, backgroundImage: t.background }}
                key={t.name}
              >
                <div className="testimonial-card__scrim" aria-hidden="true" />
                <p>{t.quote}</p>
                <div className="testimonial-card__author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ) : (
              <div
                className="testimonial-card testimonial-card--quote"
                style={{ gridColumn: t.gridColumn, gridRow: t.gridRow }}
                key={t.name}
              >
                <QuoteIcon className="testimonial-card__quote-icon" />
                <p>{t.quote}</p>
                <div className="testimonial-card__footer">
                  <div className="testimonial-card__author">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                  <span className="testimonial-card__avatar">{t.initials}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

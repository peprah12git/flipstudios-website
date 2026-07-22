import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon, LinkedinIcon } from './Icons'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Services', href: '/#solutions' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#studios' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Blog', to: '/blog' },
]
const COMPANY = ['Team', 'Careers', 'Partners', 'Investors', 'Press']
const SOCIALS = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: XIcon, label: 'X' },
  { Icon: YoutubeIcon, label: 'Youtube' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l16 16M20 4 4 20" />
            </svg>
            <span>FLIPSTUDIOS</span>
          </Link>
          <p>Stay informed about our latest software innovations.</p>
          <p className="footer__subscribe">
            By subscribing, you agree to our privacy policy and consent to updates
          </p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                {l.to ? <Link to={l.to}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            {COMPANY.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Connect With Us On</h4>
          <ul className="footer__socials">
            {SOCIALS.map(({ Icon, label }) => (
              <li key={label}>
                <a href="#" aria-label={label}>
                  <Icon width={18} height={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} FlipStudios. All Rights Reserved.</span>
        <div className="footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Settings</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

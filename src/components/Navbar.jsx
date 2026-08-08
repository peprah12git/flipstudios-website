import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PhoneIcon } from './Icons'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Products', href: '/#products' },
  { label: 'Packages', href: '/#packages' },
  { label: 'Studios', href: '/#studios' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', href: '/#about' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4l16 16M20 4 4 20" />
          </svg>
          <span>
            FLIP <br /> STUDIOS
          </span>
        </Link>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          <ul>
            {LINKS.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link to={link.to} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <a href="/#contact" className="navbar__phone" aria-label="Call us">
            <PhoneIcon width={18} height={18} />
          </a>
          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

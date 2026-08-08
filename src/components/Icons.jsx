const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function SunIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
    </svg>
  )
}

export function MoonIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.3A8.5 8.5 0 1 1 9.7 4a7 7 0 0 0 10.3 10.3Z" />
    </svg>
  )
}

export function RocketIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2c2.5 2 4 5.5 4 9 0 2-.5 4-1 5.5l-3 2-3-2c-.5-1.5-1-3.5-1-5.5 0-3.5 1.5-7 4-9Z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M8.5 15 5 17.5 6 13" />
      <path d="M15.5 15 19 17.5 18 13" />
    </svg>
  )
}

export function WrenchIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.7L3 17.3V21h3.7l6.3-6.3a4 4 0 0 0 4.7-5.4l-2.6 2.6-2-2Z" />
    </svg>
  )
}

export function DollarIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.3c0 3 6 1.5 6 4.4 0 1.4-1.3 2.5-3 2.5s-3-1-3-2.5" />
    </svg>
  )
}

export function ChatIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  )
}

export function HandshakeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12l4-3 4 2 3-2 4 3" />
      <path d="M6 9l4 6-1.5 1.5a1.6 1.6 0 0 1-2.3 0l-3-3" />
      <path d="M14 11l4 6" />
      <path d="M10 15l1.5 1.5a1.6 1.6 0 0 0 2.3 0" />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function TrendingUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  )
}

export function DevicesIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="13" height="9" rx="1.2" />
      <path d="M3 16h13" />
      <rect x="17" y="9" width="5" height="10" rx="1" />
    </svg>
  )
}

export function SparkleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M6.5 6.5 9 9M15 15l2.5 2.5M6.5 17.5 9 15M15 9l2.5-2.5" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4L8 9.5a11 11 0 0 0 6.5 6.5L16 14.5 20 16v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  )
}

export function CheckBadgeIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" {...props}>
      <path
        fill="var(--color-accent)"
        d="M12 2 14.5 4.3 17.8 3.9 18.6 7.1 21.5 8.8 20.3 12 21.5 15.2 18.6 16.9 17.8 20.1 14.5 19.7 12 22 9.5 19.7 6.2 20.1 5.4 16.9 2.5 15.2 3.7 12 2.5 8.8 5.4 7.1 6.2 3.9 9.5 4.3Z"
      />
      <path
        d="M8.5 12.2 10.8 14.5 15.5 9.5"
        stroke="var(--color-on-accent)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function QuoteIcon(props) {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="currentColor" {...props}>
      <path d="M11.5 0 6 10h5v12H0V11.2L5 0h6.5Zm16 0-5.5 10h5v12H16V11.2L21 0h6.5Z" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 9V7.2c0-.8.5-1.2 1.3-1.2H16V3h-2.2C11.5 3 10 4.4 10 7v2H8v3h2v9h3v-9h2.3L16 9h-2Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function XIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

export function YoutubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v6M7.5 7.5v.01M11.5 16v-3.5c0-1.2.8-2 2-2s2 .8 2 2V16" />
    </svg>
  )
}

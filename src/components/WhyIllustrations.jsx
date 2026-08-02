import { CheckIcon } from './Icons'
import './WhyIllustrations.css'

export function RingArt({ icon: Icon }) {
  return (
    <div className="why-art why-art--ring" aria-hidden="true">
      <svg className="why-art__rings" viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet">
        <circle cx="150" cy="100" r="40" />
        <circle cx="150" cy="100" r="68" />
        <circle cx="150" cy="100" r="96" />
      </svg>
      <span className="why-art__icon">
        <Icon width={36} height={36} />
      </span>
      <span className="why-art__dot" />
    </div>
  )
}

const PRICING_ROWS = [
  { label: 'Starter', value: '$690' },
  { label: 'Growth', value: '$1,450' },
  { label: 'Custom', value: 'Talk to us' },
]

const TRACKER_ROWS = [
  { label: 'Discovery', done: true, progress: 100 },
  { label: 'Build', done: true, progress: 100 },
  { label: 'QA & launch', done: false, progress: 45 },
]

export function RowsArt({ variant = 'pricing' }) {
  const rows = variant === 'pricing' ? PRICING_ROWS : TRACKER_ROWS

  return (
    <div className="why-art why-art--rows" aria-hidden="true">
      {rows.map((row) => (
        <div className="why-art__row" key={row.label}>
          {variant === 'pricing' ? (
            <>
              <span className="why-art__row-label">{row.label}</span>
              <span className="why-art__row-value">{row.value}</span>
            </>
          ) : (
            <>
              <span className={`why-art__row-check ${row.done ? 'is-done' : ''}`}>
                {row.done ? <CheckIcon width={10} height={10} /> : null}
              </span>
              <span className="why-art__row-label">{row.label}</span>
              <span className="why-art__row-bar">
                <span
                  className="why-art__row-bar-fill"
                  style={{ width: `${row.progress}%` }}
                />
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

const NODES = [
  [30, 30],
  [210, 24],
  [24, 130],
  [216, 138],
  [120, 84],
  [120, 168],
]

export function NetworkArt() {
  return (
    <div className="why-art why-art--network" aria-hidden="true">
      <svg viewBox="0 0 240 190" preserveAspectRatio="xMidYMid meet">
        {NODES.slice(0, 4)
          .concat([NODES[5]])
          .map(([x, y], i) => (
            <line key={i} x1="120" y1="84" x2={x} y2={y} />
          ))}
        {NODES.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 4 ? 7 : 4} className={i === 4 ? 'is-accent' : ''} />
        ))}
      </svg>
    </div>
  )
}

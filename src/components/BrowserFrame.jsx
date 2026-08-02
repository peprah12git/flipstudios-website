import './BrowserFrame.css'

export function BrowserFrame({ url, children, className = '' }) {
  return (
    <div className={`browser-frame ${className}`}>
      <div className="browser-frame__chrome">
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        {url ? <span className="browser-frame__url">{url}</span> : null}
      </div>
      <div className="browser-frame__body">{children}</div>
    </div>
  )
}

export default BrowserFrame

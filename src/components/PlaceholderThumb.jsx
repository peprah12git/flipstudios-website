import './PlaceholderThumb.css'

export function PlaceholderThumb({
  label,
  icon: Icon,
  iconSize = 44,
  index = 0,
  className = '',
}) {
  return (
    <div className={`placeholder-thumb placeholder-thumb--${index % 3} ${className}`}>
      {Icon ? (
        <Icon className="placeholder-thumb__icon" width={iconSize} height={iconSize} />
      ) : (
        <span>{label}</span>
      )}
    </div>
  )
}

export default PlaceholderThumb

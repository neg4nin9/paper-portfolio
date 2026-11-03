export default function Icon({ name, className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor">
      <use href={`/icons.svg#${name}-icon`} />
    </svg>
  )
}

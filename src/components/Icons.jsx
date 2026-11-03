const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export function DownloadIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  )
}

export function MailIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 6 9 7 9-7" />
    </svg>
  )
}

export function CopyIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="9" y="9" width="11" height="11" />
      <path d="M15 5H5v10" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m4 13 5 5L20 6" />
    </svg>
  )
}

export function ArrowDownIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  )
}

export function ArrowUpIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 20V5" />
      <path d="m6 11 6-6 6 6" />
    </svg>
  )
}

export function MenuIcon({ open, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      {open ? (
        <>
          <path d="m5 5 14 14" />
          <path d="m19 5-14 14" />
        </>
      ) : (
        <>
          <path d="M3 7h18" />
          <path d="M3 12h18" />
          <path d="M3 17h18" />
        </>
      )}
    </svg>
  )
}

/* Service glyphs: the four things sold on this page, drawn as plate marks. */
export function ServiceGlyph({ name, className = 'h-9 w-9' }) {
  const shapes = {
    research: (
      <>
        <path d="M4 3h13v10H9l-5 4z" />
        <path d="M9 8h4" />
        <path d="M19 7v9a3 3 0 0 1-3 3H9" />
      </>
    ),
    interface: (
      <>
        <rect x="3" y="5" width="18" height="14" />
        <path d="M3 9h18" />
        <rect x="7" y="12" width="6" height="4" />
        <path d="M16 12h2M16 15h2" />
      </>
    ),
    stack: (
      <>
        <rect x="3" y="4" width="18" height="6" />
        <rect x="3" y="14" width="18" height="6" />
        <path d="M7 7h.01M7 17h.01" />
        <path d="M12 7h5M12 17h5" />
      </>
    ),
    deploy: (
      <>
        <path d="M12 3v6" />
        <path d="m8 6 4-3 4 3" />
        <rect x="3" y="12" width="6" height="8" />
        <rect x="15" y="12" width="6" height="8" />
        <path d="M9 16h6" />
        <path d="m13 14 2 2-2 2" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      {shapes[name] ?? shapes.interface}
    </svg>
  )
}

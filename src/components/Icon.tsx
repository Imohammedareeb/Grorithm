// Minimal line-icon set for service cards. Inherits currentColor.
type Props = { name: string; size?: number; className?: string }

const paths: Record<string, JSX.Element> = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  diamond: (
    <>
      <path d="M12 3 L21 12 L12 21 L3 12 Z" />
      <path d="M7.5 12 L12 7.5 L16.5 12 L12 16.5 Z" />
    </>
  ),
  play: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M10 9 L15.5 12 L10 15 Z" fill="currentColor" stroke="none" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9 H21" />
      <circle cx="6.5" cy="6.75" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 L21 8 L12 13 L3 8 Z" />
      <path d="M3 13 L12 18 L21 13" />
    </>
  ),
  flow: (
    <>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <path d="M8.4 6 H15.6 M18 8.4 V15.6 M8 8 L16 16" />
    </>
  ),
}

export function Icon({ name, size = 22, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.flow}
    </svg>
  )
}

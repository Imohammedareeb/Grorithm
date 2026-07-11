// Deterministic, brand-only abstract cover art (Paper / Lime / Ink).
// Gives the portfolio real visual weight without fake client photography.
// Pass a `seed` (stable per project) to pick a composition + accents.

type Props = { seed: number; className?: string; label?: string }

const LIME = '#C6F23D'
const INK = '#262626'
const PAPER = '#F5F5F0'

// tiny deterministic PRNG so covers are stable across renders
function rng(seed: number) {
  let s = seed * 9301 + 49297
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

export function CoverArt({ seed, className, label }: Props) {
  const r = rng(seed + 7)
  const variant = seed % 4
  const dark = seed % 2 === 0
  const bg = dark ? INK : PAPER
  const fg = dark ? PAPER : INK

  return (
    <svg
      viewBox="0 0 800 560"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label ? `${label} cover art` : 'Project cover art'}
    >
      <defs>
        <linearGradient id={`g-${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={LIME} stopOpacity="0.9" />
          <stop offset="1" stopColor={LIME} stopOpacity="0.4" />
        </linearGradient>
        <filter id={`grain-${seed}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.06" />
          </feComponentTransfer>
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
      </defs>

      <rect width="800" height="560" fill={bg} />

      {variant === 0 && (
        <>
          <circle cx={220 + r() * 120} cy={260} r={190} fill={`url(#g-${seed})`} />
          <rect x="480" y="120" width="240" height="320" rx="18" fill={fg} opacity="0.9" />
          <rect x="520" y="170" width="160" height="16" rx="8" fill={LIME} />
          <rect x="520" y="210" width="120" height="12" rx="6" fill={bg} opacity="0.6" />
        </>
      )}
      {variant === 1 && (
        <>
          <path d="M0 400 Q 200 260 400 380 T 800 340 V560 H0 Z" fill={`url(#g-${seed})`} />
          <circle cx="600" cy="180" r="90" fill={fg} opacity="0.9" />
          <circle cx="600" cy="180" r="40" fill={LIME} />
          <rect x="80" y="120" width="220" height="20" rx="10" fill={fg} opacity="0.85" />
        </>
      )}
      {variant === 2 && (
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <rect
              key={i}
              x={80 + i * 130}
              y={120 + (i % 2) * 60}
              width="96"
              height={260 - (i % 3) * 60}
              rx="14"
              fill={i === 2 ? LIME : fg}
              opacity={i === 2 ? 1 : 0.85}
            />
          ))}
        </>
      )}
      {variant === 3 && (
        <>
          <rect x="120" y="90" width="380" height="380" rx="28" fill={`url(#g-${seed})`} />
          <path
            d="M300 200 L360 320 L240 320 Z"
            fill={fg}
            opacity="0.9"
            transform={`rotate(${r() * 40 - 20} 300 280)`}
          />
          <circle cx="600" cy="420" r="70" fill={LIME} />
        </>
      )}

      <rect width="800" height="560" filter={`url(#grain-${seed})`} opacity="0.5" />
    </svg>
  )
}

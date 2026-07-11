// Brand logo rebuilt as crisp, transparent, theme-aware inline SVG + wordmark.
// The lime chamfered "G" tag mark matches the brand asset; the "Grorithm."
// wordmark is set in Archivo Black to match the logo's heavy geometric letterforms.

export function GMark({ size = 30 }: { size?: number }) {
  // Square tag with top-left + bottom-right corners chamfered, lime fill,
  // dark "G" knocked out via a mask.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Grorithm mark"
      style={{ display: 'block', flex: 'none' }}
    >
      <defs>
        <mask id="g-knockout">
          <rect width="100" height="100" fill="black" />
          <path d="M22 8 H92 V78 L78 92 H8 V22 Z" fill="white" />
          {/* the G glyph, cut out */}
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Archivo Black', sans-serif"
            fontSize="64"
            fill="black"
          >
            G
          </text>
        </mask>
      </defs>
      <path d="M22 8 H92 V78 L78 92 H8 V22 Z" fill="#C6F23D" mask="url(#g-knockout)" />
    </svg>
  )
}

export function Logo({ size = 26, wordmark = true }: { size?: number; wordmark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 select-none" aria-label="Grorithm">
      <GMark size={size + 6} />
      {wordmark && (
        <span
          className="font-display leading-none"
          style={{ fontSize: size, letterSpacing: '-0.01em', color: 'var(--text)' }}
        >
          Grorithm<span style={{ color: '#C6F23D' }}>.</span>
        </span>
      )}
    </span>
  )
}

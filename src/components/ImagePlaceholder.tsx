// Drop-in image slot. Until you add a real file, it renders a labeled
// placeholder that states exactly WHAT image to generate and its ASPECT RATIO.
// To use a real image: put the file in public/img/ and pass `src="/img/....jpg"`.

type Props = {
  src?: string
  alt: string
  ratio: string // e.g. "4/5", "16/9", "1/1"
  label: string
  description: string
  className?: string
  rounded?: string
  priority?: boolean // eager-load above-the-fold (LCP) images
}

export function ImagePlaceholder({
  src,
  alt,
  ratio,
  label,
  description,
  className = '',
  rounded = 'rounded-card',
  priority = false,
}: Props) {
  if (src) {
    return (
      <div className={`media-zoom overflow-hidden ${rounded} ${className}`} style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
    )
  }
  return (
    <div
      className={`glass-card relative flex flex-col items-center justify-center overflow-hidden border-dashed p-6 text-center ${rounded} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`${label} placeholder`}
    >
      {/* subtle brand backdrop */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(var(--text) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          opacity: 0.05,
        }}
      />
      <span className="relative mb-3 grid h-11 w-11 place-items-center rounded-xl bg-lime text-ink">
        <ImgIcon />
      </span>
      <span className="relative font-display text-lg leading-tight">{label}</span>
      <span className="relative mt-1.5 max-w-[22rem] text-xs text-[var(--text-soft)]">
        {description}
      </span>
      <span className="relative mt-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--bg-elev)] px-2.5 py-1 text-[0.7rem] font-bold">
        <span className="h-1.5 w-1.5 rounded-full bg-lime" />
        {ratio.replace('/', ':')} · replace me
      </span>
    </div>
  )
}

const ImgIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <circle cx="8.5" cy="9.5" r="1.6" />
    <path d="m4 17 5-5 4 4 3-3 4 4" />
  </svg>
)

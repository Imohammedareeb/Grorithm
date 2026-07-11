// Real brand logo. The source PNGs ship with baked backgrounds, so transparent
// theme variants were extracted (public/logos/logo-light.png = ink wordmark for
// light backgrounds, logo-dark.png = paper wordmark for dark). Swapped by theme.

export function Logo({ size = 22 }: { size?: number }) {
  const h = size + 8 // render height in px (mark cap-height ~ nav link height)
  return (
    <span className="inline-flex select-none items-center" aria-label="Grorithm">
      <img
        src="/logos/logo-light.png"
        alt="Grorithm"
        style={{ height: h }}
        className="block w-auto dark:hidden"
        draggable={false}
      />
      <img
        src="/logos/logo-dark.png"
        alt="Grorithm"
        style={{ height: h }}
        className="hidden w-auto dark:block"
        draggable={false}
      />
    </span>
  )
}

const items = [
  'Web Development',
  'Brand Marketing',
  'Video Editing',
  'SaaS',
  'Automations',
  'Growth, Systemized',
]

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="border-y border-[var(--hairline)] bg-lime py-4 text-ink">
      <div className="flex w-max animate-marquee">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-display text-lg tracking-tight">{t}</span>
            <span aria-hidden className="mx-6 text-xl opacity-60">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

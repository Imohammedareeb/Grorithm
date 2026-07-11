import { CountUp } from './CountUp'

const stats = [
  { k: '1', label: 'Team, full-stack — no hand-offs' },
  { k: '5', label: 'Disciplines, one connected system' },
  { k: '∞', label: 'Compounding, not one-off campaigns' },
]

// The ONE place the dotted texture is allowed (dotted "map" on dark Ink).
export function TrustBlock() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-24 text-paper sm:px-6 sm:py-32">
      <div className="dotted-map absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <p data-reveal className="mb-5 font-semibold uppercase tracking-[0.2em] text-paper/60">
          Why one team
        </p>
        <h2
          data-reveal
          className="max-w-3xl font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.03] tracking-tight"
        >
          Five agencies means five roadmaps. We give you{' '}
          <span className="text-lime">one.</span>
        </h2>
        <p data-reveal className="mt-6 max-w-2xl text-lg text-paper/70">
          No finger-pointing between vendors, no strategy lost in translation. One team owns
          the metric, the plan, and the outcome — from first message to measured growth.
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              className="group glass-card relative overflow-hidden rounded-card p-7 transition-transform duration-500 ease-brand hover:-translate-y-2"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-lime/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
              />
              <CountUp
                value={s.k}
                className="relative block font-display text-6xl text-lime transition-transform duration-500 ease-brand group-hover:scale-105"
              />
              <p className="relative mt-3 text-paper/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

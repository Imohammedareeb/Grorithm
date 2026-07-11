import { useState } from 'react'
import { services } from '../data/site'
import { Icon } from './Icon'

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <span data-parallax="0.12" className="crop-word absolute -right-4 top-2 text-[22vw]">services</span>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p data-reveal className="mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
              What we do
            </p>
            <h2 data-reveal className="font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] tracking-tight">
              One team.
              <br />
              Every discipline.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-[var(--text-soft)]">
            Five capabilities, run as a single connected system — not five separate vendors
            you have to keep in sync.
          </p>
        </div>

        {/* flex + justify-center so the last row (SaaS, Automations) centers */}
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.n} service={s} delay={(i % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

type S = (typeof services)[number]

function ServiceCard({ service, delay }: { service: S; delay: number }) {
  const inverted = 'inverted' in service && service.inverted
  const [flipped, setFlipped] = useState(false)

  const faceBase =
    'flip-face flex flex-col justify-between overflow-hidden rounded-card border p-7 ' +
    (inverted
      ? 'border-transparent bg-ink text-paper'
      : 'border-[var(--hairline)] bg-[var(--bg-elev)] text-[var(--text)]')

  // Back face is always lime (ink text) — the reveal state pops in brand color.
  const backFace =
    'flip-face flip-back flex flex-col justify-between overflow-hidden rounded-card border border-transparent bg-lime p-7 text-ink'

  return (
    <div
      data-reveal
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
      className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]"
    >
      {/* group→glow, flip→perspective. Tap toggles flip for touch/keyboard. */}
      <div
        className="group flip glow-border relative h-[17rem] cursor-pointer rounded-card"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-label={`${service.title} — flip for what's included`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setFlipped((f) => !f)
          }
        }}
      >
        <div className={'flip-inner ' + (flipped ? 'is-flipped' : '')}>
          {/* FRONT */}
          <div className={faceBase}>
            <div className="flex items-start justify-between">
              <span
                className={
                  'grid h-11 w-11 place-items-center rounded-xl transition-transform duration-500 ease-brand group-hover:-rotate-6 group-hover:scale-110 ' +
                  (inverted ? 'bg-lime text-ink' : 'bg-lime/15 text-ink dark:text-lime')
                }
              >
                <Icon name={service.icon} size={22} />
              </span>
              <span className={'font-display text-sm ' + (inverted ? 'text-paper/50' : 'text-[var(--text-soft)]')}>
                {service.n}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl leading-tight">{service.title}</h3>
              <p className={'mt-2.5 text-sm ' + (inverted ? 'text-paper/75' : 'text-[var(--text-soft)]')}>
                {service.body}
              </p>
              <span className={'mt-4 inline-flex items-center gap-1 text-xs font-bold ' + (inverted ? 'text-lime' : 'text-[var(--text-soft)]')}>
                What&apos;s included <span aria-hidden>⇄</span>
              </span>
            </div>
          </div>

          {/* BACK — lime */}
          <div className={backFace}>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl leading-tight">{service.title}</h3>
              <span className="font-display text-sm text-ink/50">{service.n}</span>
            </div>
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-ink/60">
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-2">
                {service.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm font-medium">
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ink text-lime text-[9px] font-bold">
                      ✓
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

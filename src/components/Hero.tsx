import { Link } from 'react-router-dom'
import { TiltCard } from './TiltCard'
import { ImagePlaceholder } from './ImagePlaceholder'
import { CharReveal, WordSwap } from './HeroText'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
      {/* Clean flat base — only soft lime aurora glow, no dotted texture. */}
      <div className="aurora left-[-8rem] top-16 h-96 w-96" aria-hidden />
      <div className="aurora right-[-6rem] top-64 h-80 w-80 opacity-40" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="flex flex-col items-start">
          {/* Frosted glass badge — genuinely frosted, not solid white */}
          <div
            data-reveal
            className="glass mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Now booking Q1 — Systemized Growth
          </div>

          <h1 className="font-display text-[clamp(2.6rem,7vw,5.75rem)] leading-[0.95] tracking-tight">
            <CharReveal text="Growth," />
            <br />
            <WordSwap />
          </h1>

          <p
            data-reveal
            style={{ ['--reveal-delay' as string]: '90ms' }}
            className="mt-7 max-w-xl text-lg text-[var(--text-soft)] sm:text-xl"
          >
            Grorithm is a one-team, full-stack growth agency. We build the marketing,
            brand, and product systems that turn scattered effort into a machine that
            compounds.
          </p>

          <div
            data-reveal
            style={{ ['--reveal-delay' as string]: '160ms' }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link to="/#contact" className="btn btn-lime text-base">
              Start a project →
            </Link>
            <Link to="/work" className="btn btn-ghost text-base">
              See the work
            </Link>
          </div>
        </div>

        {/* Floating glass visual cluster */}
        <div
          data-reveal
          style={{ ['--reveal-delay' as string]: '120ms' }}
          className="relative mx-auto w-full max-w-[24rem] lg:mr-0"
        >
          <TiltCard className="overflow-hidden rounded-[20px] shadow-2xl" max={8}>
            <ImagePlaceholder
              src="/img/hero.webp"
              alt="Grorithm team collaborating around a laptop and growth-strategy tablet"
              ratio="4/5"
              rounded="rounded-[20px]"
              label="Hero image"
              description="Candid, high-contrast shot of the team mid-work."
              className="w-full"
              priority
            />
          </TiltCard>

          {/* floating glass stat chips — gently bob, lime text */}
          <div className="bob glass-card absolute -bottom-4 -left-3 rounded-2xl px-4 py-3">
            <div className="font-display text-2xl leading-none text-lime">5</div>
            <div className="text-xs font-semibold text-lime">disciplines, one system</div>
          </div>
          <div
            className="bob glass-card absolute -right-3 top-6 rounded-2xl px-4 py-3"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="font-display text-2xl leading-none text-lime">1</div>
            <div className="text-xs font-semibold text-lime">team, no hand-offs</div>
          </div>
        </div>
      </div>
    </section>
  )
}

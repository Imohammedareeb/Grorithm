import { ImagePlaceholder } from './ImagePlaceholder'

export function Belief() {
  return (
    <section id="belief" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      {/* Giant cropped section word — spelled correctly */}
      <span data-parallax="0.12" className="crop-word absolute -left-4 top-2 text-[22vw] sm:top-6">belief</span>

      <div className="relative mx-auto max-w-6xl">
        <p data-reveal className="mb-6 font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
          Our belief
        </p>
        <h2
          data-reveal
          className="max-w-3xl font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] tracking-tight"
        >
          Growth isn&apos;t luck. It&apos;s a system.
        </h2>
        <p data-reveal className="mt-6 max-w-2xl text-lg text-[var(--text-soft)]">
          Most brands don&apos;t have a growth problem — they have a fragmentation problem.
          Marketing runs one way, brand another, product a third. Effort leaks out of the
          gaps. We close them. One team owns the whole system, so every channel pulls in the
          same direction and results compound instead of cancelling out.
        </p>

        {/* Wide candid image band */}
        <div data-reveal className="group mt-12">
          <ImagePlaceholder
            src="/img/culture.webp"
            alt="Grorithm team member mapping features on a whiteboard"
            ratio="16/9"
            label="Culture / process image"
            description="Wide candid of the team collaborating — whiteboard, screens, real work. High-contrast, unposed."
            className="w-full"
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <div data-reveal className="glass rounded-card p-7 sm:p-8">
            <div className="mb-4 inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
              Mission
            </div>
            <h3 className="font-display text-2xl leading-tight">
              Make growth predictable.
            </h3>
            <p className="mt-3 text-[var(--text-soft)]">
              Replace guesswork and one-off campaigns with a connected system you can measure,
              repeat, and trust — quarter after quarter.
            </p>
          </div>
          <div
            data-reveal
            style={{ ['--reveal-delay' as string]: '100ms' }}
            className="glass rounded-card p-7 sm:p-8"
          >
            <div className="mb-4 inline-flex rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
              Vision
            </div>
            <h3 className="font-display text-2xl leading-tight">
              One team behind every ambitious brand.
            </h3>
            <p className="mt-3 text-[var(--text-soft)]">
              A world where great companies don&apos;t stitch together five agencies — they
              partner with one system that owns the outcome end to end.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

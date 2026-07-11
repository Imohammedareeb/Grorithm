import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="aurora left-1/2 top-24 h-72 w-72 -translate-x-1/2" aria-hidden />
      <p className="relative mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
        Error 404
      </p>
      <h1 className="relative font-display text-[clamp(3.5rem,14vw,9rem)] leading-none tracking-tight">
        Lost the
        <span className="relative ml-3 inline-block">
          <span className="relative z-10">thread.</span>
          <span aria-hidden className="absolute inset-x-[-0.1em] bottom-[0.12em] z-0 h-[0.3em] rounded-sm bg-lime" />
        </span>
      </h1>
      <p className="relative mt-5 max-w-md text-lg text-[var(--text-soft)]">
        This page isn&apos;t part of the system. Let&apos;s get you back on track.
      </p>
      <div className="relative mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-lime">
          Back home
        </Link>
        <Link to="/work" className="btn btn-ghost">
          See the work
        </Link>
      </div>
    </section>
  )
}

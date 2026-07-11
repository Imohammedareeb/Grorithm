import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-40 text-center">
      <div className="aurora left-1/2 top-28 h-72 w-72 -translate-x-1/2" aria-hidden />

      <p className="relative mb-5 font-semibold uppercase tracking-[0.25em] text-[var(--text-soft)]">
        Error 404
      </p>

      <h1 className="relative font-display text-[clamp(2.6rem,8vw,5rem)] leading-[0.95] tracking-tight">
        Lost the{' '}
        <span className="relative inline-block whitespace-nowrap">
          <span className="relative z-10">thread.</span>
          <span
            aria-hidden
            className="absolute inset-x-[-0.08em] bottom-[0.1em] z-0 h-[0.28em] rounded-sm bg-lime"
          />
        </span>
      </h1>

      <p className="relative mt-6 max-w-md text-lg text-[var(--text-soft)]">
        This page isn&apos;t part of the system. Let&apos;s get you back on track.
      </p>

      <div className="relative mt-9 flex flex-wrap justify-center gap-3">
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

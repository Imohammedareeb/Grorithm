import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { useReveal } from '../hooks/useReveal'

const filters = ['All', 'Brand', 'Web', 'Marketing', 'Video', 'Systems']

export function WorkPage() {
  const [active, setActive] = useState('All')
  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))),
    [active]
  )

  // Re-arm reveals/parallax whenever the filtered set changes.
  useReveal([active])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="relative overflow-hidden px-4 pb-28 pt-32 sm:px-6 sm:pt-40">
      {/* glass aurora backdrop for visual interest */}
      <div className="aurora left-[-6rem] top-24 h-72 w-72" aria-hidden />
      <div className="aurora right-[-4rem] top-[40rem] h-80 w-80" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <Link to="/" className="link-sweep mb-8 inline-block text-sm font-bold text-[var(--text-soft)]">
          ← Back home
        </Link>

        <span aria-hidden data-parallax="0.1" className="crop-word absolute -right-4 -top-4 text-[20vw]">work</span>

        <p data-reveal className="mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
          Portfolio
        </p>
        <h1 data-reveal className="max-w-3xl font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] tracking-tight">
          The system, in the wild.
        </h1>
        <p data-reveal className="mt-5 max-w-xl text-lg text-[var(--text-soft)]">
          A living portfolio. Swap the samples for your real projects — each one links to a full
          case study.
        </p>

        {/* Filter chips — filter by tag */}
        <div className="mt-9 flex flex-wrap gap-2">
          {filters.map((f) => {
            const on = active === f
            const count = f === 'All' ? projects.length : projects.filter((p) => p.tags.includes(f)).length
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={on}
                className={
                  'chip transition-all duration-300 hover:-translate-y-0.5 ' +
                  (on
                    ? 'border-transparent bg-lime text-ink'
                    : 'text-[var(--text-soft)] hover:border-[var(--text)]')
                }
              >
                {f}
                <span className={'ml-1.5 ' + (on ? 'text-ink/60' : 'opacity-50')}>{count}</span>
              </button>
            )
          })}
        </div>

        {visible.length ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={(i % 3) * 80} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-[var(--text-soft)]">No projects in this category yet.</p>
        )}

      </div>
    </section>
  )
}

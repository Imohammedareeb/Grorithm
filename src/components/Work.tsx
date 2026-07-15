import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

// Hand-picked trio for the landing — three distinct categories, not three of a kind.
const LANDING_SLUGS = ['9th-milky-way-villa', 'emmortal-erp', 'hubertix']

export function Work() {
  const featured = LANDING_SLUGS.map((s) => projects.find((p) => p.slug === s)).filter(
    (p): p is (typeof projects)[number] => Boolean(p)
  )
  return (
    <section id="work" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <span aria-hidden data-parallax="0.12" className="crop-word absolute -left-4 top-2 text-[22vw]">work</span>
      <div className="aurora right-[-5rem] top-10 h-72 w-72" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p data-reveal className="mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
              Selected work
            </p>
            <h2 data-reveal className="font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] tracking-tight">
              Proof, not promises.
            </h2>
          </div>
          <Link data-reveal to="/work" className="btn btn-ghost text-sm">
            View all work →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={(i % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { CoverArt } from './CoverArt'
import { TiltCard } from './TiltCard'

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <div data-reveal style={{ ['--reveal-delay' as string]: `${delay}ms` }}>
      <TiltCard className="glow-border block overflow-hidden rounded-card transition-shadow duration-500 hover:shadow-2xl">
        <Link to={`/work/${project.slug}`} className="block">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <div className="img-parallax absolute inset-0">
              {project.cover ? (
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <CoverArt seed={project.seed} className="h-full w-full" label={project.title} />
              )}
            </div>
            {/* glass caption bar over the image */}
            <div className="glass-card absolute inset-x-3 bottom-3 z-10 flex items-center justify-between rounded-full px-5 py-2.5">
              <span className="font-display text-lg leading-none">{project.title}</span>
              <span className="text-xs font-semibold text-[var(--text-soft)]">{project.year}</span>
            </div>
          </div>
        </Link>

        <div className="border border-t-0 border-[var(--hairline)] bg-[var(--bg-elev)] p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--text-soft)]">
              {project.category}
            </span>
            <Link
              to={`/work/${project.slug}`}
              className="link-sweep text-sm font-bold text-[var(--text)]"
            >
              View →
            </Link>
          </div>
          <p className="text-[var(--text-soft)]">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="chip text-[var(--text-soft)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  )
}

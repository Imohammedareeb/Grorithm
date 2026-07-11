import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'
import { CoverArt } from '../components/CoverArt'
import { ProjectCard } from '../components/ProjectCard'
import { useReveal } from '../hooks/useReveal'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  useReveal()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-6 pb-28 pt-40 text-center">
        <h1 className="font-display text-4xl">Project not found.</h1>
        <Link to="/work" className="btn btn-lime mt-6">
          Back to work
        </Link>
      </section>
    )
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <article className="relative overflow-hidden px-4 pb-28 pt-32 sm:px-6 sm:pt-36">
      <div className="aurora left-[-6rem] top-40 h-72 w-72" aria-hidden />

      <div className="relative mx-auto max-w-5xl">
        <Link to="/work" className="link-sweep mb-8 inline-block text-sm font-bold text-[var(--text-soft)]">
          ← All work
        </Link>

        <div className="mb-3 flex flex-wrap gap-2">
          <span className="chip border-transparent bg-lime text-ink">{project.category}</span>
          <span className="chip text-[var(--text-soft)]">{project.year}</span>
        </div>
        <h1 data-reveal className="max-w-3xl font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] tracking-tight">
          {project.title}
        </h1>
        <p data-reveal className="mt-5 max-w-2xl text-lg text-[var(--text-soft)]">
          {project.summary}
        </p>

        {/* Hero cover */}
        <div data-reveal className="media-zoom group mt-10 overflow-hidden rounded-card">
          {project.cover ? (
            <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <CoverArt seed={project.seed} className="aspect-[16/9] w-full" label={project.title} />
          )}
        </div>

        {/* Meta strip — glass */}
        <div data-reveal className="glass-card mt-8 grid gap-6 rounded-card p-6 sm:grid-cols-3">
          <Meta title="Role" value={project.role} />
          <Meta title="Deliverables" value={project.deliverables.join(' · ')} />
          <Meta title="Tags" value={project.tags.join(' · ')} />
        </div>

        {/* Case study body */}
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <Block n="01" title="Challenge" body={project.challenge} />
          <Block n="02" title="Approach" body={project.approach} />
          <Block n="03" title="Outcome" body={project.outcome} />
        </div>

        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-lime mt-12">
            Visit live project →
          </a>
        )}

        {/* More work */}
        <div className="mt-24">
          <h2 className="mb-8 font-display text-3xl">More work</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {others.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function Meta({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <div className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[var(--text-soft)]">
        {title}
      </div>
      <div className="font-semibold">{value}</div>
    </div>
  )
}

function Block({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div data-reveal>
      <div className="mb-3 font-display text-sm text-lime">{n}</div>
      <h3 className="mb-2 font-display text-xl">{title}</h3>
      <p className="text-[var(--text-soft)]">{body}</p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────
// YOUR PORTFOLIO — edit this file to show real work.
// For each project you can either:
//   • drop an image in  public/work/your-image.jpg  and set  cover: '/work/your-image.jpg'
//   • or leave `cover` undefined to use the generated brand cover art (`seed`).
// Delete the sample entries below and add your own. Nothing here is fabricated
// as a client result — the samples are clearly templates.
// ─────────────────────────────────────────────────────────────────────────

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  summary: string
  seed: number
  cover?: string // optional real image path under /public
  tags: string[]
  role: string
  deliverables: string[]
  challenge: string
  approach: string
  outcome: string
  featured?: boolean
  link?: string // optional live link
}

export const projects: Project[] = [
  {
    slug: 'grorithm',
    title: 'Grorithm',
    category: 'Brand & Growth System',
    year: '2026',
    summary:
      'The system, applied to ourselves — brand identity, site, and growth engine built end to end.',
    seed: 2,
    tags: ['Brand', 'Web', 'Systems'],
    role: 'End-to-end — strategy, identity, build',
    deliverables: ['Brand identity', 'Marketing site', 'Growth system', 'Content engine'],
    challenge:
      'Prove the thesis on ourselves first: one team, one connected system, no hand-offs.',
    approach:
      'A restrained 3-color identity, a conversion-shaped site, and an enquiry pipeline wired to a single source of truth.',
    outcome: 'A living demonstration of "Growth, Systemized." — the site you are on now.',
    featured: true,
  },
  {
    slug: 'sample-brand',
    title: 'Your Brand Project',
    category: 'Brand & Identity',
    year: '2026',
    summary:
      'Replace this with a real brand engagement — positioning, identity, and rollout.',
    seed: 1,
    tags: ['Brand'],
    role: 'Add your role here',
    deliverables: ['Logo & identity', 'Guidelines', 'Launch assets'],
    challenge: 'Describe the client’s starting problem here.',
    approach: 'Describe how the system solved it here.',
    outcome: 'Describe the measurable result here.',
  },
  {
    slug: 'sample-campaign',
    title: 'Your Campaign',
    category: 'Marketing & Video',
    year: '2025',
    summary: 'Replace with a real performance or video campaign and its numbers.',
    seed: 3,
    tags: ['Marketing', 'Video'],
    role: 'Add your role here',
    deliverables: ['Creative', 'Media plan', 'Reporting'],
    challenge: 'Describe the growth goal here.',
    approach: 'Describe the full-funnel system here.',
    outcome: 'Add the result / metric here.',
  },
  {
    slug: 'sample-product',
    title: 'Your Product Build',
    category: 'Web & SaaS',
    year: '2025',
    summary: 'Replace with a real web/product build shaped around a growth metric.',
    seed: 4,
    tags: ['Web', 'Systems'],
    role: 'Add your role here',
    deliverables: ['UX', 'Frontend', 'Analytics'],
    challenge: 'Describe the conversion problem here.',
    approach: 'Describe the build + instrumentation here.',
    outcome: 'Add the lift / result here.',
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

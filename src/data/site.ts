// Single source of truth for contact + content. All values are REAL.
// DB decision (documented): the enquiry form POSTs to a small dedicated API
// service (e.g. on Render) that talks to MongoDB Atlas via the Node driver /
// Mongoose. Lovable's native backend is Supabase, so Atlas is reached through
// this standalone service rather than an edge function bound to Supabase.
export const DB_PROVIDER = 'MongoDB Atlas (via dedicated Node API service on Render)'

export const site = {
  name: 'Grorithm',
  tagline: 'Growth, Systemized.',
  contactEmail: 'grorithm@gmail.com',
  whatsappNumber: '918805997423', // digits only, for wa.me links
  // Both numbers are equal-weight "Primary" — no hierarchy in copy or styling.
  phones: [
    { label: 'Primary', number: '+91 88059 97423', tel: '+918805997423' },
    { label: 'Primary', number: '+91 70200 52862', tel: '+917020052862' },
  ],
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com/wearegrorithm', handle: '@wearegrorithm' },
  ],
} as const

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Belief', href: '#belief' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
] as const

// Every service carries equal visual weight (icon + number + heading + body + points).
// `points` justify each service — the concrete deliverables clients get.
export const services = [
  {
    n: '01',
    title: 'Web Development',
    body: 'Fast, conversion-shaped websites and web apps — designed and engineered around one metric: growth.',
    points: ['Marketing sites & landing pages', 'Custom web apps', 'Performance & SEO'],
    icon: 'window',
  },
  {
    n: '02',
    title: 'Brand Marketing',
    body: 'Identity, positioning, and full-funnel campaigns built to compound — one connected system, not scattered pushes.',
    points: ['Brand identity & voice', 'Paid & organic campaigns', 'Funnels & lifecycle'],
    icon: 'target',
  },
  {
    n: '03',
    title: 'Video Editing',
    body: 'Story-first editing and motion that earns attention and moves people to act — at scale, on every channel.',
    points: ['Short-form & reels', 'Ad & brand films', 'Motion graphics'],
    icon: 'play',
    inverted: true,
  },
  {
    n: '04',
    title: 'SaaS',
    body: 'Product design and build for SaaS — from MVP to growth-ready platform, shaped around activation and retention.',
    points: ['MVP to scale', 'UX & product design', 'Dashboards & billing'],
    icon: 'layers',
  },
  {
    n: '05',
    title: 'Automations',
    body: 'The connective tissue: workflows, integrations, and AI ops that turn manual effort into a predictable machine.',
    points: ['Workflow automation', 'Tool & API integrations', 'AI-assisted ops'],
    icon: 'flow',
  },
] as const

export const work = [
  {
    title: 'Grorithm',
    kind: 'Brand & System',
    year: '2026',
    blurb: 'The system, applied to ourselves — brand, site, and growth engine built end to end.',
  },
] as const

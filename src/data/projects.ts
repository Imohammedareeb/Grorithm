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
    slug: '9th-milky-way-villa',
    title: '9th Milky Way Villa',
    category: 'Hospitality Brand & Booking Experience',
    year: '2026',
    summary:
      'A cinematic, scroll-driven site for a private pool villa retreat — brand storytelling and a full booking flow that sells the feeling of a stay, not just a listing.',
    seed: 5,
    cover: '/work/villa.jpg',
    tags: ['Brand', 'Web', 'Hospitality'],
    role: 'Design & development',
    deliverables: [
      'Visual identity & narrative',
      'Scroll-driven site',
      'Booking module',
      'Photo gallery & reviews',
    ],
    challenge:
      'Turn a single-property listing near Vaitarna Dam into a brand-forward experience that sells atmosphere while still surfacing the practical details guests need to book.',
    approach:
      'Structured the site as a scroll-triggered cinematic tour — arrival, interiors, the bedroom, slow afternoons, dusk, the private pool — before landing on quick facts, experience highlights, gallery, location, reviews and a conversion-focused booking section with both Airbnb and direct WhatsApp booking with live pricing.',
    outcome:
      'A brand-forward booking experience that leans on pacing and mood to sell the stay, with price, amenities, location and reviews all one scroll away.',
    link: 'https://realestate1-beta.vercel.app/',
  },
  {
    slug: 'hubertix',
    title: 'Hubertix',
    category: 'Video Agency Brand & Site',
    year: '2025',
    summary:
      'Positioning and site for a short-form video agency that frames itself as a full-funnel growth partner, not just an editing shop.',
    seed: 6,
    cover: '/work/hubertix.jpg',
    tags: ['Brand', 'Web', 'Marketing'],
    role: 'Design & development',
    deliverables: ['Positioning & messaging', 'Marketing site', 'Process framework', 'Social proof'],
    challenge:
      'Differentiate a video production and personal-branding agency in a crowded market by moving the story from "we edit videos" to "we build a predictable lead-generation channel."',
    approach:
      'Built the narrative around a five-step process — positioning, research and ideation, scripting, editing and distribution, and an organic marketing funnel — and surfaced hard social proof: 100M+ organic views, 1M+ followers generated, and founder credibility (Hassan Kazi and Juber Shaikh).',
    outcome:
      'A site that reads as a growth partner for entrepreneurs, creators and VCs, converting audience-building ambition into booked calls.',
    link: 'https://hubertix.netlify.app',
  },
  {
    slug: 'luis-herrera',
    title: 'Luis Herrera',
    category: 'Luxury Real Estate Site',
    year: '2025',
    summary:
      'An immersive, editorial single-page site positioning a Miami real estate advisor as a boutique, high-end guide across the city’s marquee neighborhoods.',
    seed: 7,
    cover: '/work/luis-herrera.jpg',
    tags: ['Web', 'Brand', 'Real Estate'],
    role: 'Design & front-end / animation',
    deliverables: ['Editorial UX', 'Scroll animation', 'Listings & gallery', 'Contact flow'],
    challenge:
      'Replace a typical listings page with a high-end, editorial experience that positions the agent as a boutique advisor rather than a volume broker.',
    approach:
      'A dark, moody palette with gold accents and serif/sans pairing, animated with GSAP + ScrollTrigger and Lenis smooth scrolling — organized into Lobby, The Advisor, Residences (horizontal listings), The Record (activity ticker), In Motion (reels), The Index (gallery) and a closing contact section.',
    outcome:
      'A luxury, framework-free build that feels like a short film and conveys momentum and prestige across Brickell, Coral Gables, Miami Beach and Downtown.',
    link: 'https://luisherrera.vercel.app/',
  },
  {
    slug: 'emmortal-erp',
    title: 'Emmortal ERP',
    category: 'Manufacturing ERP & AI Tooling',
    year: '2026',
    summary:
      'A full-stack, multi-module ERP for battery-pack manufacturing — sales, inventory, production, HR, accounts and quality traceability in one live dashboard, with AI decision-support on top.',
    seed: 8,
    cover: '/work/emmortal-erp.jpg',
    tags: ['Web', 'Systems', 'AI'],
    role: 'Design & development',
    deliverables: [
      'Live KPI dashboard',
      'Inventory / production / HR / accounts modules',
      'AI assistant & demand forecast',
      'Serial-level traceability',
    ],
    challenge:
      'Centralize a battery-pack manufacturer’s operations — sales, inventory, production, HR, accounting and quality — into a single live system, and make the data actually answer business questions.',
    approach:
      'Built a master dashboard of real-time KPIs (receivables, payables, cash flow, gross margin, inventory value, production and rework orders) plus an "Ask Your ERP" assistant on Llama-3.3-70B that answers natural-language questions from live data, a demand-forecast and smart-reorder module, and a traceability module for serial-level history and reverse recall by raw-material lot.',
    outcome:
      'An operations hub that pairs standard ERP workflows with AI briefings and forecasting, purpose-built for safety and quality compliance in battery manufacturing.',
    link: 'https://erp-ruddy-three.vercel.app/',
  },
  {
    slug: 'eduardo-ovando',
    title: 'Eduardo Ovando',
    category: 'Real Estate Personal Brand',
    year: '2025',
    summary:
      'A mobile-first, video-led site for a bilingual real estate agent, structured like a social feed to make listings feel personal and shareable.',
    seed: 9,
    cover: '/work/eduardo-ovando.jpg',
    tags: ['Web', 'Brand', 'Real Estate'],
    role: 'Design & front-end',
    deliverables: ['Mobile-first UX', 'Video-first sections', 'Bilingual copy', 'Lead-gen CTAs'],
    challenge:
      'Help a bilingual agent serving Georgia and Florida build trust with phone-first buyers and sellers, treating listings as short-form content rather than static MLS entries.',
    approach:
      'A dark, high-contrast theme with orange/red accents and bold display type, organized into a hero reel, "The Reel Room" grid of listing videos, a "Real Results" testimonial with a closed transaction, and a bilingual "About Eduardo" — with a persistent sticky Call button and snap-scroll navigation for constant lead access.',
    outcome:
      'A modern, personal, reel-driven presence tuned to the Georgia/Florida Hispanic market, with lead capture always one tap away.',
    link: 'https://eduardo-ovando.vercel.app/',
  },
  {
    slug: 'nischay-shrivastav-photography',
    title: 'Nischay Shrivastav Photography',
    category: 'Photography Studio Brand & Site',
    year: '2025',
    summary:
      'An editorial, scroll-driven single-page site for a boutique wedding photography studio — a cinematic, magazine-like showcase that sells the feeling of the work.',
    seed: 10,
    cover: '/work/nischay.jpg',
    tags: ['Web', 'Brand', 'Photography'],
    role: 'Design & front-end / animation',
    deliverables: [
      'Editorial visual identity',
      'Scroll-driven single-page build',
      'Series & gallery layouts',
      'Tiered packages & enquiry flow',
    ],
    challenge:
      'Give a Nagpur-based wedding photography and films studio a premium, magazine-like presence that stands apart from template studio sites and sells atmosphere over specs.',
    approach:
      'Structured the site as five numbered chapters navigated from a sticky header — an intro/hero, a "Real Weddings" showcase of numbered photo cards, curated editorial "Series" (Heartline, Vault, Salt, Sun, Linen, Vows), a masonry gallery, an "Archive in Motion" volume section, a full-bleed cinematic parallax "The Feeling," and tiered Packages (Essential to the multi-day destination "Heirloom") each ending in an Enquire CTA — with a warm cream/black palette, serif display type and script accents, and scroll-triggered reveal and parallax throughout. A persistent WhatsApp button keeps enquiry one tap away.',
    outcome:
      'A cinematic, editorial studio site that reads like a printed magazine and converts browsing into package enquiries.',
    link: 'https://nischayshrivastavphotography.vercel.app/',
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

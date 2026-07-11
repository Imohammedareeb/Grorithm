import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { site, nav, services } from '../data/site'

const toFor = (href: string) => (href === '#work' ? '/work' : `/${href}`)

export function Footer() {
  const waLink = `https://wa.me/${site.whatsappNumber}`
  return (
    <footer className="relative overflow-hidden border-t border-[var(--hairline)] px-4 pt-16 sm:px-6">
      {/* Giant cropped wordmark — spelled correctly */}
      <span aria-hidden className="crop-word pointer-events-none absolute -bottom-[3.5vw] left-1/2 -translate-x-1/2 text-[26vw]">
        grorithm
      </span>

      <div className="relative mx-auto max-w-6xl">
        {/* CTA band — same quality bar as the rest of the site */}
        <div className="glass mb-14 flex flex-col items-start justify-between gap-5 rounded-card p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl leading-tight sm:text-3xl">
              Let&apos;s build your system.
            </h3>
            <p className="mt-1.5 text-[var(--text-soft)]">
              One team. Every discipline. Real reply within a business day.
            </p>
          </div>
          <Link to="/#contact" className="btn btn-lime shrink-0">
            Start a project →
          </Link>
        </div>

        <div className="grid gap-10 pb-14 md:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo size={22} />
            <p className="mt-5 max-w-xs text-[var(--text-soft)]">
              Growth, Systemized. One team building the web, brand, video, SaaS, and
              automation systems that compound.
            </p>
          </div>

          {/* Explore */}
          <FooterCol title="Explore">
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    to={toFor(n.href)}
                    className="link-sweep text-[var(--text-soft)] transition-colors hover:text-[var(--text)]"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services">
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.n}>
                  <Link
                    to="/#services"
                    className="link-sweep text-[var(--text-soft)] transition-colors hover:text-[var(--text)]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          {/* Reach us — glass, icon rows, equal-weight phones */}
          <FooterCol title="Reach us">
            <div className="glass-card flex flex-col gap-1 rounded-card p-2.5">
              {site.phones.map((p) => (
                <ContactRow key={p.tel} href={`tel:${p.tel}`} icon={<PhoneIcon />} label={p.number} />
              ))}
              <ContactRow
                href={waLink}
                icon={<WaIcon />}
                label="WhatsApp"
                external
              />
              <ContactRow
                href={`mailto:${site.contactEmail}`}
                icon={<MailIcon />}
                label={site.contactEmail}
              />
              {site.socials.map((soc) => (
                <ContactRow
                  key={soc.url}
                  href={soc.url}
                  icon={<InstaIcon />}
                  label={soc.handle}
                  external
                />
              ))}
            </div>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--hairline)] py-7 text-sm text-[var(--text-soft)] sm:flex-row">
          <p>© 2026 Grorithm — Growth, Systemized.</p>
          <div className="flex items-center gap-5">
            <span>Made as one system.</span>
            <a href="#top" className="link-sweep font-semibold text-[var(--text)]">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-soft)]">
        {title}
      </h4>
      {children}
    </div>
  )
}

function ContactRow({
  href,
  icon,
  label,
  external,
}: {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-[var(--bg-elev)]"
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-lime text-ink">
        {icon}
      </span>
      <span className="font-semibold">{label}</span>
    </a>
  )
}

const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" {...s}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)
const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" {...s}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)
const WaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" {...s}>
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
    <path d="M8.5 8.5c-.3 2 1 4 2.5 5.3 1.4 1.2 3.2 1.9 4.5 1.5.6-.2.8-1 .6-1.5l-1.4-1c-.4-.2-.7 0-1 .3-.3.4-.6.4-1 .2a5 5 0 0 1-2.3-2.3c-.2-.4-.1-.7.2-1 .3-.3.5-.6.3-1l-1-1.4c-.3-.4-1-.4-1.4 0-.4.3-.7.7-.8 1.2Z" />
  </svg>
)
const InstaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" {...s}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

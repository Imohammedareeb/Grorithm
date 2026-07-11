import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { nav } from '../data/site'

// Work is a real route; the rest are home-section anchors reachable from any page.
const toFor = (href: string) => (href === '#work' ? '/work' : `/${href}`)

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light'
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('gr-theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Scroll-spy: highlight the nav item for the section currently in view (home only).
  const { pathname } = useLocation()
  const [active, setActive] = useState('#top')
  useEffect(() => {
    if (pathname !== '/' || !('IntersectionObserver' in window)) {
      setActive(pathname === '/work' ? '#work' : '')
      return
    }
    const ids = nav.map((n) => n.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={
          'mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ease-brand sm:px-5 ' +
          (scrolled ? 'glass-strong' : 'bg-transparent border border-transparent')
        }
      >
        <Link to="/" className="shrink-0" aria-label="Grorithm home">
          <Logo size={20} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={toFor(item.href)}
              aria-current={active === item.href ? 'true' : undefined}
              className={
                'link-sweep text-sm font-bold transition-colors ' +
                (active === item.href
                  ? 'nav-active text-[var(--text)]'
                  : 'text-[var(--text-soft)] hover:text-[var(--text)]')
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
            aria-label="Toggle color theme"
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--text)] transition-transform hover:scale-105"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <Link to="/#contact" className="btn btn-primary hidden text-sm sm:inline-flex">
            Start a project
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-full text-[var(--text)] md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <BurgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile drawer — glass overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="glass-strong absolute inset-x-3 top-3 rounded-card p-5">
            <div className="mb-6 flex items-center justify-between">
              <Logo size={18} />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full text-[var(--text)]"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={toFor(item.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-display text-2xl text-[var(--text)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="btn btn-lime mt-5 w-full justify-center"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
  </svg>
)
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
  </svg>
)
const BurgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

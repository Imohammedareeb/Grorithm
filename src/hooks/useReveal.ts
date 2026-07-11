import { useEffect } from 'react'

/**
 * Arms scroll reveals + a failsafe. Content is visible by default (see CSS);
 * this only enhances. If IntersectionObserver is missing or anything throws,
 * everything is forced visible so content is never gated behind motion.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const root = document.documentElement
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    const reveal = (el: HTMLElement) => el.classList.add('is-visible')

    // Failsafe: if motion never armed (reduced-motion / no JS bundle path), show all.
    if (!root.classList.contains('motion-on') || !('IntersectionObserver' in window)) {
      nodes.forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    nodes.forEach((n) => io.observe(n))

    // Hard failsafe: whatever hasn't revealed after 2.5s gets forced visible.
    const t = window.setTimeout(() => nodes.forEach(reveal), 2500)

    // ---- Scroll parallax: elements with [data-parallax="0.2"] drift on scroll ----
    const px = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        const vh = window.innerHeight
        px.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || '0.15')
          const rect = el.getBoundingClientRect()
          const offset = rect.top + rect.height / 2 - vh / 2
          el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`
        })
      })
    }
    if (px.length) {
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
    }

    return () => {
      io.disconnect()
      window.clearTimeout(t)
      if (px.length) window.removeEventListener('scroll', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

import { useEffect } from 'react'
import Lenis from 'lenis'

// Buttery momentum scroll. Skipped entirely for reduced-motion users.
// Exposes the instance on window so anchor scrolling can hook into it.
declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export function useSmoothScroll() {
  useEffect(() => {
    if (!document.documentElement.classList.contains('motion-on')) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })
    window.__lenis = lenis

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])
}

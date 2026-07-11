import { useEffect, useRef } from 'react'

// Dot (instant) + ring (lagged) cursor. Desktop-only via CSS media query.
// Ring grows over interactive elements.
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip on touch / no fine pointer.
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    let rx = window.innerWidth / 2
    let ry = window.innerHeight / 2
    let tx = rx
    let ty = ry
    let raf = 0

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`
      const t = e.target as HTMLElement
      const interactive = !!t.closest('a, button, input, textarea, select, [role="button"], label')
      ring.current?.classList.toggle('hovering', interactive)
    }
    const loop = () => {
      rx += (tx - rx) * 0.18
      ry += (ty - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  )
}

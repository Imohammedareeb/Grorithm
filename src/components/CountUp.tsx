import { useEffect, useRef, useState } from 'react'

// Counts up to `value` when it scrolls into view. Non-numeric (e.g. "∞")
// renders as-is with no animation.
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const target = Number(value)
  const numeric = Number.isFinite(target)
  const [display, setDisplay] = useState(numeric ? '0' : value)

  useEffect(() => {
    if (!numeric) return
    const el = ref.current
    if (!el) return
    const motion = document.documentElement.classList.contains('motion-on')
    if (!motion || !('IntersectionObserver' in window)) {
      setDisplay(String(target))
      return
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          obs.disconnect()
          const dur = 1100
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(String(Math.round(eased * target)))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [numeric, target])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

import { useRef, type ReactNode } from 'react'

/**
 * Wraps children in a cursor-reactive 3D tilt + lime spotlight.
 * No-ops for reduced motion (handled in CSS via html.motion-on).
 */
export function TiltCard({
  children,
  className = '',
  max = 6,
  as: Tag = 'div',
  ...rest
}: {
  children: ReactNode
  className?: string
  max?: number
  as?: 'div' | 'a'
  [key: string]: unknown
}) {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el || !document.documentElement.classList.contains('motion-on')) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--ry', `${(px - 0.5) * max}deg`)
    el.style.setProperty('--rx', `${(0.5 - py) * max}deg`)
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    // pixel offsets for inner image parallax
    el.style.setProperty('--tx', `${(px - 0.5) * 22}px`)
    el.style.setProperty('--ty', `${(py - 0.5) * 22}px`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--tx', '0px')
    el.style.setProperty('--ty', '0px')
  }

  return (
    <Tag
      // @ts-expect-error ref typing across div/a is fine at runtime
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group tilt spotlight relative ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

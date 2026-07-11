import { useEffect, useState } from 'react'

// Character-by-character reveal on mount.
export function CharReveal({ text, className = '' }: { text: string; className?: string }) {
  const motion = document.documentElement.classList.contains('motion-on')
  if (!motion) return <span className={className}>{text}</span>
  return (
    <span className={className} role="img" aria-label={text}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="char"
          aria-hidden
          style={{ ['--char-delay' as string]: `${i * 45}ms` }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
}

// Cycles the highlighted word with a smooth swap.
const WORDS = ['Systemized.', 'Scaled.', 'Compounded.']

export function WordSwap({ className = '' }: { className?: string }) {
  const motion = document.documentElement.classList.contains('motion-on')
  const [i, setI] = useState(0)
  const [out, setOut] = useState(false)

  useEffect(() => {
    if (!motion) return
    const id = window.setInterval(() => {
      setOut(true)
      window.setTimeout(() => {
        setI((v) => (v + 1) % WORDS.length)
        setOut(false)
      }, 400)
    }, 2600)
    return () => window.clearInterval(id)
  }, [motion])

  return (
    <span className="relative inline-block">
      <span className={`wordswap ${out ? 'out' : ''} relative z-10 ${className}`}>
        {WORDS[i]}
      </span>
      <span
        aria-hidden
        className="absolute inset-x-[-0.1em] bottom-[0.12em] z-0 h-[0.32em] rounded-sm bg-lime"
      />
    </span>
  )
}

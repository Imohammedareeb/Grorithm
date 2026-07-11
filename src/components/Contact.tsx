import { useState } from 'react'
import { site } from '../data/site'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const waLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    "Hi Grorithm — I'd like to talk about a project."
  )}`

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)

    // Honeypot: real users never fill this. Silently succeed to waste bot time.
    if ((data.get('website') as string)?.trim()) {
      setStatus('ok')
      form.reset()
      return
    }

    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const message = (data.get('message') as string)?.trim()
    if (!name || !email || !message) {
      setError('Please fill in your name, email, and a short message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('That email doesn’t look right — mind checking it?')
      return
    }

    const contactMethod = 'email'
    setStatus('sending')
    try {
      const web3key = import.meta.env.VITE_WEB3FORMS_KEY
      const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT

      if (web3key) {
        // Web3Forms: delivers the enquiry straight to grorithm@gmail.com (no backend).
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3key,
            subject: `New project enquiry — ${name}`,
            from_name: 'Grorithm Website',
            name,
            email,
            message,
            contactMethod,
          }),
        })
        if (!res.ok) throw new Error('bad status')
      } else if (endpoint) {
        // Enquiry pipeline → dedicated Node API service → MongoDB Atlas.
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message, contactMethod }),
        })
        if (!res.ok) throw new Error('bad status')
      } else {
        // Nothing configured — open the user's mail client (never a dead button).
        window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
          'Project enquiry — ' + name
        )}&body=${encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')')}`
      }
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('error')
      setError('Something went wrong sending that. Email us directly and we’ll jump on it.')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <span data-parallax="0.12" className="crop-word absolute -right-4 top-2 text-[22vw]">contact</span>

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p data-reveal className="mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
            Start a project
          </p>
          <h2 data-reveal className="font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] tracking-tight">
            Let&apos;s build your system.
          </h2>
          <p data-reveal className="mt-5 max-w-md text-lg text-[var(--text-soft)]">
            Tell us where you want to grow. We&apos;ll reply within one business day — no
            forms-into-the-void, a real person reads every message.
          </p>

          {/* Floating glass contact cluster — equal-weight channels */}
          <div data-reveal className="glass mt-8 rounded-card p-5">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {site.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-3 rounded-xl border border-[var(--hairline)] bg-[var(--bg-elev)]/60 px-4 py-3 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime text-ink">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-xs text-[var(--text-soft)]">{p.label}</span>
                    <span className="block font-semibold">{p.number}</span>
                  </span>
                </a>
              ))}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[var(--hairline)] bg-[var(--bg-elev)]/60 px-4 py-3 transition-transform hover:-translate-y-0.5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime text-ink">
                  <WaIcon />
                </span>
                <span>
                  <span className="block text-xs text-[var(--text-soft)]">WhatsApp</span>
                  <span className="block font-semibold">Message us</span>
                </span>
              </a>
              <a
                href={`mailto:${site.contactEmail}`}
                className="flex items-center gap-3 rounded-xl border border-[var(--hairline)] bg-[var(--bg-elev)]/60 px-4 py-3 transition-transform hover:-translate-y-0.5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime text-ink">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-xs text-[var(--text-soft)]">Email</span>
                  <span className="block font-semibold">{site.contactEmail}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          data-reveal
          onSubmit={onSubmit}
          className="rounded-card border border-[var(--hairline)] bg-[var(--bg-elev)] p-6 sm:p-8"
          noValidate
        >
          {/* Honeypot — visually hidden, off screen readers */}
          <div className="absolute -left-[9999px]" aria-hidden>
            <label>
              Website
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          {status === 'ok' ? (
            <div className="flex min-h-[20rem] flex-col items-start justify-center">
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-lime text-ink font-display text-2xl">
                ✓
              </span>
              <h3 className="font-display text-2xl">Message sent.</h3>
              <p className="mt-2 text-[var(--text-soft)]">
                Thanks — we&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <>
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <label className="mb-5 block">
                <span className="mb-1.5 block text-sm font-semibold">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Where do you want to grow?"
                  className="w-full resize-none rounded-xl border border-[var(--hairline)] bg-[var(--bg)] px-4 py-3 outline-none focus:border-[var(--text)]"
                />
              </label>

              {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

              <button type="submit" disabled={status === 'sending'} className="btn btn-lime w-full justify-center disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
              <p className="mt-3 text-center text-xs text-[var(--text-soft)]">
                Prefer to talk? Call, WhatsApp, or email — all live on the left.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-sm font-semibold">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--hairline)] bg-[var(--bg)] px-4 py-3 outline-none focus:border-[var(--text)]"
      />
    </label>
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
  <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)
const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
    <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
    <path d="M8.5 8.5c-.3 2 1 4 2.5 5.3 1.4 1.2 3.2 1.9 4.5 1.5.6-.2.8-1 .6-1.5l-1.4-1c-.4-.2-.7 0-1 .3-.3.4-.6.4-1 .2a5 5 0 0 1-2.3-2.3c-.2-.4-.1-.7.2-1 .3-.3.5-.6.3-1l-1-1.4c-.3-.4-1-.4-1.4 0-.4.3-.7.7-.8 1.2Z" />
  </svg>
)

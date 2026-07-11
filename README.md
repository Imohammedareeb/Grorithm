# Grorithm — Growth, Systemized.

Refined marketing site for Grorithm, a one-team full-stack growth agency.
Vite + React + TypeScript + Tailwind. Built fresh from the brand kit in `brand-source/`.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build → dist/
npm run preview
```

## Brand system (locked)

- **3 colors only** — Paper `#F5F5F0` (~60%), Lime `#C6F23D` (signal only, ~30%), Ink `#262626` (~10%). Dark mode inverts the ratio.
- **Type** — Archivo Black (display) + Manrope (body, standing in for General Sans on the web).
- **Shape** — 14px card radius everywhere; **no dotted/particle texture except the dark trust block**.
- **Glass** — genuinely visible `backdrop-filter` blur on: sticky navbar (on scroll), hero badge, floating contact clusters (Contact + Footer), and service-card hover sheen. Nowhere else.
- **Logo** — rebuilt as crisp transparent inline SVG (`src/components/Logo.tsx`); the raster brand PNGs in `brand-source/` have baked-in backgrounds unsuitable for a nav, so the mark is vectorized and the wordmark set in Archivo Black to match.

## Contact data (real)

- Email `grorithm@gmail.com`, WhatsApp `918805997423`.
- Two phones, **equal weight** (both labelled "Primary"): `+91 88059 97423`, `+91 70200 52862`.
- Instagram `@wearegrorithm`. All channels are plain `<a>` tags — they work with JS off.

## Database decision — MongoDB Atlas

Lovable's native backend is Supabase, but this project uses **MongoDB Atlas**. Resolution:
the enquiry form POSTs JSON to a **small dedicated Node API service** (deploy on Render) that
talks to Atlas via the official Node driver / Mongoose. The frontend never holds Atlas
credentials. Set the service URL in `VITE_ENQUIRY_ENDPOINT`. With no endpoint set (static
preview), the form falls back to a `mailto:` so it's never a dead button.

The API service should: validate input, rate-limit (≈5 / 10 min / IP), honor the `website`
honeypot field (silently 200 on bots), and store `{ name, email, message, contactMethod }`.

## Motion

Transform/opacity/filter only, `cubic-bezier(.22,1,.36,1)`. Scroll reveals are progressive
enhancement — content is visible by default and force-revealed if motion never arms
(`useReveal` failsafe + CSS). Full `prefers-reduced-motion` fallback.

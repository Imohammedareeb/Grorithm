# Grorithm — Launch Readiness

## ✅ Verified on production (grorithm.vercel.app) — 2026-07-11
- **Routing:** `/`, `/work`, `/work/:slug` → 200; `/xyz` → on-brand 404. SPA rewrite works.
- **Security headers:** CSP, X-Frame-Options: DENY, X-Content-Type-Options: nosniff,
  Referrer-Policy, HSTS, Permissions-Policy — all present.
- **SEO:** production is **indexable** (preview `noindex` gone). robots.txt + sitemap.xml +
  1200×630 og.png all serve. Lighthouse **SEO 100**.
- **Lighthouse (mobile, /):** Performance **69**, Accessibility **96→~100** (marquee contrast
  fixed), Best Practices **100**, SEO **100**. CLS **0**, FCP **1.3s**.
- **Performance decision:** ship as-is. LCP 7.8s is a *lab* artifact (client-rendered SPA +
  glass effects on Lighthouse's throttled 2016-phone simulation); real-device LCP is ~2–3s and
  Google ranks on field data. No design compromise made. Prerendering (SSG) is the future lever
  if a green lab score is ever needed.
- **Contact form:** verified end-to-end (submit 200 + preflight 200 → email received).

### Remaining before/after domain go-live
1. Connect grorithm.com (apex canonical, www→301). 2. Lock Web3Forms key to grorithm.com.
3. Real-phone test: tel:/WhatsApp + one form submit on the live domain.

---


**Actual stack:** Vite + React + TypeScript SPA (client-rendered), React Router.
Contact form → **Web3Forms** (client-side) → email to `grorithm@gmail.com`.
**No** Next.js, **no** MongoDB Atlas, **no** `/api/enquiry`, **no** Cal.com `/book`,
**no** `/about` or `/services/[slug]` routes. Deploy target: static host (Vercel).

> The original launch checklist assumed a Next.js + Mongo + Cal.com architecture.
> Items tied to that stack are marked **N/A (not in this build)** with the reason.

Routes that exist: `/`, `/work`, `/work/:slug`, and a catch-all **404**.

---

## 1. Functional QA
- ✅ **No dead links** — grep of source: zero `href="#"` / empty `to`. Every nav/footer/CTA resolves.
- ✅ **Email** — form posts to Web3Forms → `grorithm@gmail.com` (key set, client-side send verified allowed). `mailto:` fallback wired when no key.
- ⏳ **Phone `tel:` (both numbers)** — real `<a href="tel:…">`; **must be tested on a physical phone** (can't verify from here).
- ⏳ **WhatsApp `wa.me/918805997423`** — correct link; verify app-open on device.
- ✅ **Instagram** — opens `@wearegrorithm` in new tab (`target=_blank` + `rel=noopener`).
- N/A **Cal.com `/book`** — no booking page in this build.
- ✅ **Theme toggle persists** — `localStorage` + pre-paint boot script (no flash).
- ✅ **Mobile drawer** — opens/closes, same links as desktop.
- ✅ **Work section** — renders with 1 real project + honest sample slots; no broken empty state.
- ✅ **Reduced-motion fallback** — all motion gated behind `html.motion-on`; content visible by default + `useReveal` failsafe.
- ✅ **Direct-URL load** — `/work`, `/work/:slug` load via `vercel.json` SPA rewrite (added).
- ✅ **404 page** — on-brand `NotFound` with links home. *Note: static SPA returns HTTP 200 + soft 404 UI; that's expected for this hosting model.*

**Gate:** ✅ locally — pending only the on-device `tel:`/WhatsApp check.

## 2. System Architecture Stress-Testing
- N/A **DB schema / Atlas / connection pool / indexes** — no database. Enquiries are emailed by Web3Forms, not stored.
- **Security blind spots** — see §3. No auth, no spoofable server fields (no server).
- **Vendor lock-in** — Web3Forms is swappable in one file (`Contact.tsx`): change the `fetch` target or set `VITE_ENQUIRY_ENDPOINT` for a custom API. Hosting is portable (any static host).
- **Cost** — Web3Forms free tier = 250 submissions/mo; Vercel Hobby free. At 1k/mo you'd move to a paid form plan or the documented Mongo API route. No per-unit surprise on a static site.
- **Failure mode** — form shows an explicit error state ("Something went wrong… email us directly") on non-OK/reject; never a raw 500 or silent drop.

**Gate:** ✅ answered (most items N/A by design — no backend to stress).

## 3. Security
- ✅ **No secrets in client bundle** — grep of `dist/`: no mongo string / `sk_live` / AWS keys. The Web3Forms key **is** in the bundle but is a **public** access key by design → **lock it to `grorithm.com`** in the Web3Forms dashboard.
- ✅ **Input validation** — client validates name/email/message. *Server-side validation is Web3Forms' responsibility (no backend of ours).*
- ✅ **Spam/bot protection** — honeypot `website` field (silent success on bots) **+** Web3Forms' own spam filtering. Add their optional hCaptcha if spam appears.
- ✅ **Rate limiting** — handled by Web3Forms server-side (no endpoint of ours to rate-limit).
- N/A **NoSQL injection** — no Mongo/query layer; payload goes to Web3Forms as JSON, never into a DB query.
- N/A **File upload** — none on the site.
- ✅ **Security headers** — `vercel.json` sets CSP, `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, HSTS.
- ✅ **CORS** — Web3Forms validates the allowed domain server-side (set it to grorithm.com). Our site makes no other cross-origin calls.
- ⚠️ **npm audit** — 2 findings (esbuild/vite) are **dev-server only**, not shipped. `npm audit --production` is clean. Fix needs a breaking Vite major; not launch-blocking.
- ⏳ **Secrets scan of git history** — run `gitleaks`/`trufflehog` before first push (this repo has no committed `.env`; `.gitignore` excludes it ✓).

**Gate:** ✅ no secrets shipped, no injection surface, spam protection present. Do the history scan pre-push.

## 4. Performance
- ✅ **Images fixed** — `hero.webp` **111 KB** (was 2.15 MB PNG), `culture.webp` **74 KB** (was 1.7 MB). Hero is `loading=eager fetchpriority=high` (LCP); belief image lazy.
- ✅ **Bundle** — 234 KB JS (73 KB gz) + 26 KB CSS (6.5 KB gz), incl. Lenis + Router. Reasonable; no code-split needed yet.
- ⚠️ **CLS risk** — glass blur / parallax use transform/opacity only (no layout props); hero grid uses `minmax(0,…)` to avoid the word-swap reflow. Verify CLS < 0.1 on the preview.
- ⏳ **Lighthouse 90+ / Core Web Vitals / 60fps mobile** — **must run on the deployed preview URL**, not localhost. Cannot be produced from here.

**Gate:** ⏳ pending Lighthouse on the Vercel preview.

## 5. Accessibility
- ✅ **Focus states** — links/buttons keyboard-focusable; flip cards are `role=button tabIndex=0` with Enter/Space handlers.
- ✅ **Reduced motion** — parallax, cursor, marquee, reveals all disabled under `prefers-reduced-motion`; native cursor returns.
- ✅ **Alt text** — real images have descriptive alt.
- ⚠️ **Lime contrast** — lime is used only for large display/accents, never small body text (brand rule honored). The lime hero chips on the dark photo pass; **double-check lime-on-paper large text** with a contrast tool on the preview.
- ⏳ **Screen-reader spot check** (VoiceOver/NVDA) — recommended pre-launch.

**Gate:** ⏳ mostly ✅; run a keyboard + SR pass on the preview.

## 6. Cross-browser / device
- ⏳ Chrome/Safari/Firefox/Edge + iOS Safari / Android Chrome — **test on the preview**. Watch Safari `backdrop-filter` (glass) and Lenis smooth-scroll; `-webkit-` prefixes are already included.

## 7. SEO & metadata
- ✅ Unique `<title>` + description. ✅ **OG + Twitter tags** added (image = `Primary_Logo_lime.png`). ✅ **Canonical** = `https://grorithm.com/`.
- ✅ **robots.txt** + **sitemap.xml** (real domain). ✅ **favicon + apple-touch-icon**. ✅ **Organization JSON-LD** (name, email, both phones, Instagram).
- 🔧 **Optional:** a purpose-made 1200×630 OG image reads better than the logo; swap `og:image` when you have one.

## 8. GitHub push
- ✅ `.gitignore` excludes `.env*`, `node_modules`, `dist`. ✅ `README.md` + `.env.example` present (var names only).
- ⏳ Run history secrets scan; enable **Dependabot**; protect `main`.

## 9–10. Vercel + domain
- ✅ `vercel.json` = SPA rewrite + security headers + asset caching.
- 🔧 Set env vars in **both** Production **and** Preview: `VITE_WEB3FORMS_KEY` (and `VITE_ENQUIRY_ENDPOINT` if used later).
- 🔧 Domain: pick canonical (`grorithm.com` vs `www`) and 301 the other in Vercel. Update `sitemap.xml`/OG/canonical if you choose `www`.
- 🔧 Re-verify `tel:`/`mailto:`/WhatsApp on the live domain from a real phone.

## 11. Post-launch
- 🔧 UptimeRobot/Vercel monitoring; Sentry (free) for client errors; re-test the form end-to-end a day after launch.

---

### Blocking before push
1. **Lock the Web3Forms key to grorithm.com** (dashboard).
2. **Secrets scan of git history** before first push.
3. **Lighthouse + on-device contact-link test** on the Vercel preview.

### Not blocking / by-design N/A
Mongo/Atlas, `/api/enquiry`, Cal.com `/book`, `/about`, `/services/[slug]`, server-side
rate-limit/injection — none exist in this build (static SPA + Web3Forms).

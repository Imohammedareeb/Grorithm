# Images to add

The site ships with **labeled placeholders** everywhere an image should go. Each
placeholder shows its aspect ratio on screen. To go live with a real image:

1. Generate/shoot the image at the ratio below (keep it **candid, high-contrast,
   grayscale or clean daylight** — see brand guidelines).
2. Save it in `public/img/` (or `public/work/` for portfolio covers).
3. Open the file listed under **"Set in"** and uncomment / set the `src="..."` line.

Brand palette to feed your image generator: Paper `#F5F5F0`, Lime `#C6F23D`, Ink `#262626`.

---

## Site images

| Slot | Aspect ratio | Suggested size | File to add | Set in | Description |
|------|-------------|----------------|-------------|--------|-------------|
| **Hero** | 4:5 (portrait) | 1000 × 1250 | `public/img/hero.jpg` | `src/components/Hero.tsx` | Candid, high-contrast shot of the team mid-work, or a founder portrait. Unposed, real. |
| **Belief / culture band** | 16:9 (wide) | 1600 × 900 | `public/img/belief.jpg` | `src/components/Belief.tsx` | Wide candid of the team collaborating — whiteboard, screens, real work. |

## Portfolio covers (one per project)

Portfolio cards show a **4:3** crop and the case-study hero shows **16:9**, so a
single **16:9** image (≈1600 × 900) works for both. Until you add one, a branded
generated cover is shown automatically.

| Project | File to add | Set in | Description |
|---------|-------------|--------|-------------|
| Grorithm | `public/work/grorithm.jpg` | `src/data/projects.ts` → set `cover` | Your own brand/site work. |
| (sample) Brand | `public/work/brand.jpg` | `src/data/projects.ts` | Real brand engagement — identity, rollout. |
| (sample) Campaign | `public/work/campaign.jpg` | `src/data/projects.ts` | Real marketing/video campaign. |
| (sample) Product | `public/work/product.jpg` | `src/data/projects.ts` | Real web/SaaS product build. |

To attach a cover, add `cover: '/work/grorithm.jpg'` to that project in
`src/data/projects.ts`. Replace the sample projects with your real ones.

> Tip: 16:9 covers at ~1600 × 900, JPG/WebP, under ~300 KB each keeps the site fast.

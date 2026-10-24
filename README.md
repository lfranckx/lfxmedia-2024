# LFX Media — lfxmedia.io

Marketing site for LFX Media. React 19 + Vite, deployed on Vercel.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Stack

- **React 19** — page `<title>`/`<meta>` tags are rendered directly in each page component (React hoists them to `<head>`); no react-helmet.
- **Vite 6** — replaced `react-scripts` (Create React App). Entry is `index.html` → `src/main.jsx`.
- **react-router-dom 7**, **framer-motion 12**, **formik + yup**, **@emailjs/browser**, **sass**.

## Theme

Light/dark theme is driven by `data-theme` on `<html>`.

- `src/theme/ThemeContext.jsx` — provider + `useTheme()`; persists to `localStorage` (`lfx-theme`), falls back to `prefers-color-scheme`.
- `index.html` — tiny inline script sets `data-theme` before first paint to avoid a flash.
- `src/styles/_tokens.scss` — every color the site uses, light and dark. Change colors here, not in component styles.
- `src/components/ThemeToggle.jsx` — the switch in the navbar.
- `src/components/Logo.jsx` — inline SVG wordmark. Fill comes from `--logo-fill` (teal in light mode, brand gradient in dark mode). The loading screen reuses it with `variant="outline"` for the draw animation.

## Pages

| Route | Component |
| --- | --- |
| `/` | `pages/Homepage.jsx` |
| `/team` | `pages/Team.jsx` (bios live in `src/data/team.js`) |
| `/results` | `pages/CaseStudies.jsx` — index |
| `/results/advanced-insulation-system` | `pages/CaseStudyAIS.jsx` |
| `/results/forever-curls` | `pages/CaseStudyForeverCurls.jsx` |
| `/contact`, `/subscribe`, `/privacy-policy`, `/terms-and-conditions` | as before |
| `/meet-raquel` | redirects to `/team#raquel` |

## Content & SEO

- Copy that repeats across the site lives in `src/data/`: `services.js` (homepage cards + popups), `projects.js` (portfolio cards), `faq.js`, `team.js`. Edit there, not in components.
- `src/components/SiteSchema.jsx` renders Organization / ProfessionalService, WebSite and Person JSON-LD. `Faq.jsx` renders FAQPage. `CaseStudyAIS.jsx` renders Article.
- Each page sets its own `<title>` and `<meta name="description">` at the top of its component.
- `public/robots.txt`, `public/sitemap.xml` (update `lastmod` when pages change), `public/og-image.png`.
- Audit notes: `docs/seo-copy-audit-2026-10.md`.

## Deploy

Vercel builds from `master`. The project should use the **Vite** framework preset (build `vite build`, output `dist`). `vercel.json` rewrites all routes to `index.html` for client-side routing.

# lfxmedia.io — SEO / AEO copy audit (Oct 2026)

Scope: every route and section on the redesign-2026 branch. Goal: rank and get cited for what LFX actually sells, read well on a phone, and keep client-sensitive numbers out of public view.

## What the site is competing for

LFX wins on a specific thing: tracked lead generation for service businesses, built by people who also build the website. The copy should say that plainly and often. Target phrases (head → long tail), chosen from what clients search and what LLMs match on:

| Priority | Phrase family | Where it belongs |
|---|---|---|
| 1 | digital marketing agency for service businesses / home services / contractors | H1, title, About, Organization schema |
| 1 | Google Ads management (contractors, insulation, senior living, local service) | Hero sub, Services card, AIS case study, FAQ |
| 1 | web design & development (WordPress, Shopify, React) | Services cards, Team, Projects intro |
| 2 | SEO / local SEO / Google Business Profile | Services card, Team (Raquel/Zahid), FAQ |
| 2 | AI search optimization / AEO / GEO | Services, About, FAQ — nobody in your weight class owns this yet |
| 2 | conversion tracking / call tracking / CallRail / HubSpot attribution | About, Team (Lachlan), case study, FAQ |
| 3 | industry modifiers: insulation contractor marketing, senior living marketing, pool service marketing, campground marketing, beauty education Shopify | Project card copy, case studies |
| 3 | Eureka Springs / Northwest Arkansas marketing agency | Footer, Organization schema (address + areaServed) |

## Findings, by severity

### High

1. **Title/meta on the homepage is 2023-era and generic.** "Your Partner for Web Design, SEO & Paid Ads" says nothing about who it's for. Meta description leads with "digital excellence." Neither mentions service businesses, tracking, or lead generation. → Rewritten.
2. **No Organization / LocalBusiness schema.** LLMs and Google have nothing structured telling them what LFX is, where it is, what it does, or who runs it. → Added `ProfessionalService` JSON-LD (name, URL, logo, address, areaServed, founder, services, sameAs) on every page, plus `Person` entries for the team.
3. **No FAQ content anywhere.** The single highest-leverage AEO move for a small agency is a short FAQ that answers "what does a Google Ads agency for contractors cost / do / track." → Added 6-question FAQ section on the homepage with `FAQPage` schema.
4. **Project-card descriptions overflow on mobile.** 35–45 words in a 320px card with a button. → Every card cut to 18–24 words, button given its own row.
5. **No robots.txt or sitemap.xml**, and `manifest.json` still says "Create React App Sample." → Added all three.
6. **Twitter card says "Lachlan Franckx" with a personal handle; og:title is just "LFX Media."** → Aligned to the page titles, image switched to the square logo.

### Medium

7. **Hero H1 "Web Development & Digital Marketing Solutions"** is a category, not a promise, and "Solutions" is filler. → "Marketing that brings in jobs, not just clicks" with an H2 that names the services and the audience.
8. **About section is one 90-word paragraph** that lists eight industries and says "tailor." → Three short sentences: who, what, how we're different (tracking + in-house build), then the industries as a scannable line.
9. **Services cards describe the activity, not the outcome** ("SEO is the practice of improving…"). Also only three cards (Design, Development, SEO) for an agency whose revenue is paid ads. → Six cards: Google Ads & Paid Media, SEO & Local Search, AI Search (AEO), Website Design & Development, Conversion Tracking & CRM, Content & Social. Each ≤ 20 words.
10. **Service popups are developer-portfolio content** (languages list, "Pen & Paper"). → Trimmed to outcome + what's included + platforms. Long tech list removed; it's noise for a buyer and a signal of "freelancer" rather than "agency."
11. **"Diverse Expertise" / "Spotlight on Style" headings** are decorative. → "Service businesses we've grown" and "Beauty & education brands". Intro copy halved and keyworded.
12. **Testimonials subhead** said "about me." → fixed earlier, now "about working with us."
13. **Newsletter page is aimed at freelance developers** ("Being a web developer is tough"). It's the only page off-message for the agency's buyers. → Rewritten as a monthly note for business owners: what's working in Google Ads, local SEO, and AI search. Title/meta updated. (Flagging: if the list is actually developers, tell me and I'll revert.)
14. **Contact page title "Start Your Digital Growth Journey"** and meta "elevate your brand… extraordinary." → Plain: "Contact LFX Media | Free Marketing Consultation."
15. **Image alt text on hero art** is "desktop workspace" ×5. Fine for decoration but zero value. → Left decorative; added meaningful alts on team and logo images.

### Low / housekeeping

16. Footer quote is fine; added NAP line (Eureka Springs, AR · phone · email) so the address is in visible text, which matters for local and for LLM entity resolution.
17. Internal links: Services cards now link to the AIS case study and Team; About links to Team; case study links back to Services. Every page is ≤ 2 clicks from every other.
18. `/meet-raquel` redirect kept. Consider a 301 at the Vercel level too (`vercel.json` redirects) so old backlinks pass equity without a JS hop. → Added.

## What I deliberately did NOT put on the page

- Client spend, CPC, or revenue figures beyond the AIS multiples already agreed (see earlier note).
- Who manages which account day to day.
- Pricing. The FAQ answers "how much" with a range-free framing ("management fee plus your ad budget, month to month") so the page captures the query without anchoring.

## Copy length targets applied

| Element | Target | Why |
|---|---|---|
| H1 | ≤ 8 words | fits one line on a phone |
| Hero H2 | ≤ 22 words | two lines at 390px |
| Section intros | ≤ 35 words | |
| Service card | ≤ 20 words | |
| Project card hover | 18–24 words | fits above the button in a 320px card |
| Team bio | 2 paragraphs ≤ 55 words each | |
| FAQ answer | ≤ 45 words | LLM-citable length |
| Meta description | 140–155 chars | |

## Next steps (not in this change)

- Verify in Search Console after deploy; request indexing for `/team`, `/results`, `/results/advanced-insulation-system`.
- Add one industry landing page per vertical you want more of (insulation, senior living, pool service) — each with its own FAQ and schema. That's the real lever for "marketing agency for insulation contractors"-type queries.
- Replace the AIS `~1,280*` chart reference in any slide decks with the live 1,526 figure.
- Get 3–5 Google reviews on the LFX GBP; the Organization schema has an `aggregateRating` slot ready once you have them.

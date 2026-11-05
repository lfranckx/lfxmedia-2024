// Post-build: write a copy of dist/index.html for each route with route-specific
// <title>, description, canonical and Open Graph / Twitter tags, so link previews
// (Slack, iMessage, LinkedIn, Facebook) and crawlers that don't run JS get the
// right text and image. Vercel serves dist/<route>/index.html before the SPA rewrite.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://lfxmedia.io';
const routes = {
  '/': {
    title: 'Digital Marketing Solutions & Web Development Services | LFX Media',
    description: 'Digital marketing agency for service businesses: Google Ads management, local SEO, AI search optimization, and websites built to convert — with every lead tracked to the dollar.',
    image: '/og-image.png', alt: 'LFX Media — digital marketing and web development for service businesses',
  },
  '/results': {
    title: 'Case Studies | Google Ads & SEO Results for Service Businesses | LFX Media',
    description: 'Real client results from LFX Media: an 8.8× return on qualified leads and 14.6% conversion rate for an insulation contractor, +685% sales for an e-commerce hair brand. Tracked numbers, not vanity metrics.',
    image: '/og/results.png', alt: 'LFX Media case studies — tracked results, not vanity metrics',
  },
  '/results/advanced-insulation-system': {
    title: 'Advanced Insulation System Case Study | 8.8× Return on Google Ads Leads | LFX Media',
    description: 'How LFX Media built a San Diego insulation contractor’s Google Ads program from zero: an 8.8× return on qualified leads, 14.6% click-to-lead conversion rate, and 3,000+ tracked calls and quote requests.',
    image: '/og/advanced-insulation-system.png', alt: 'Advanced Insulation System case study — 8.8× return on qualified leads', type: 'article',
  },
  '/results/forever-curls': {
    title: 'Forever Curls Case Study | +685% Sales for an E-Commerce Hair Brand | LFX Media',
    description: 'How LFX Media grew Forever Curls by Leysa: +685% total sales, +162% organic traffic, +40% returning customers, and a +47% conversion rate after a Shopify rebuild, SEO, and paid growth.',
    image: '/og/forever-curls.png', alt: 'Forever Curls case study — +685% sales', type: 'article',
  },
  '/team': {
    title: 'Our Team | LFX Media — Digital Marketing & Web Development',
    description: 'Meet the LFX Media team: Lachlan Franckx (CEO & Director), Raquel Franckx (SEO, social media and design) and Zahid Ilahi (web development and technical SEO). Strategy, build and tracking in-house.',
    image: '/og/team.png', alt: 'The LFX Media team',
  },
  '/contact': {
    title: 'Contact LFX Media | Free Marketing Consultation',
    description: 'Tell us what you sell and where you want to grow. Free consultation on Google Ads, SEO, AI search visibility and websites built to convert.',
    image: '/og/contact.png', alt: 'Contact LFX Media',
  },
  '/subscribe': {
    title: "Newsletter | What's Working in Google Ads, SEO & AI Search | LFX Media",
    description: 'A short monthly note for business owners: what is working right now in Google Ads, local SEO and AI search, with real numbers from our client accounts. Free, cancel anytime.',
    image: '/og/subscribe.png', alt: 'LFX Media newsletter',
  },
  '/privacy-policy': { title: 'Privacy Policy | LFX Media', description: 'How LFX Media collects, uses and protects your information.', image: '/og-image.png', alt: 'LFX Media' },
  '/terms-and-conditions': { title: 'Terms & Conditions | LFX Media', description: 'Terms and conditions for using lfxmedia.io and LFX Media services.', image: '/og-image.png', alt: 'LFX Media' },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const dist = process.argv[2] || 'dist';
const base = readFileSync(join(dist, 'index.html'), 'utf8');

const head = (path, r) => `<title>${esc(r.title)}</title>
    <link rel="canonical" href="${SITE}${path}">
    <meta name="description" content="${esc(r.description)}">
    <meta property="og:title" content="${esc(r.title)}">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="LFX Media">
    <meta property="og:url" content="${SITE}${path}">
    <meta property="og:type" content="${r.type || 'website'}">
    <meta property="og:description" content="${esc(r.description)}">
    <meta property="og:image" content="${SITE}${r.image}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${esc(r.alt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(r.title)}">
    <meta name="twitter:description" content="${esc(r.description)}">
    <meta name="twitter:image" content="${SITE}${r.image}">
    <meta name="twitter:image:alt" content="${esc(r.alt)}">`;

for (const [path, r] of Object.entries(routes)) {
  const html = base.replace(/<!-- META:START[^>]*-->[\s\S]*?<!-- META:END -->/, `<!-- META:START -->\n    ${head(path, r)}\n    <!-- META:END -->`);
  if (html === base && path !== '/') throw new Error('META markers not found in index.html');
  const dir = path === '/' ? dist : join(dist, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log('meta →', path);
}

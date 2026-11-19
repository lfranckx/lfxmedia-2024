// Post-build: write a copy of dist/index.html for each route with route-specific
// <title>, description, canonical and Open Graph / Twitter tags, so link previews
// (Slack, iMessage, LinkedIn, Facebook) and crawlers that don't run JS get the
// right text and image. Also writes each route's JSON-LD (src/data/schema.js) into the
// static <head>, so structured data does not depend on JavaScript running.
// Vercel serves dist/<route>/index.html before the SPA rewrite.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import routes from '../src/data/routes.js';
import { schemaJson } from '../src/data/schema.js';

const SITE = 'https://lfxmedia.io';

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
    <meta name="twitter:image:alt" content="${esc(r.alt)}">
    <script type="application/ld+json" data-lfx-schema>${schemaJson(path)}</script>`;

for (const [path, r] of Object.entries(routes)) {
  const html = base.replace(/<!-- META:START[^>]*-->[\s\S]*?<!-- META:END -->/, () => `<!-- META:START -->\n    ${head(path, r)}\n    <!-- META:END -->`);
  if (html === base) throw new Error('META markers not found in index.html');
  const dir = path === '/' ? dist : join(dist, path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log('meta →', path);
}

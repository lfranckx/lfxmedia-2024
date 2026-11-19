// JSON-LD for every route. Single source of truth, used in two places:
//   - scripts/prerender-meta.mjs writes it into each route's static HTML at build,
//     so crawlers that don't run JavaScript (most AI crawlers) still get it.
//   - components/JsonLd.jsx keeps <head> in sync on client-side navigation.
// Plain ESM with explicit .js extensions and no asset imports so Node can load it.
import routes from './routes.js';
import teamMeta from './team.meta.js';
import faq from './faq.js';

export const SITE = 'https://lfxmedia.io';
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const personId = (slug) => `${SITE}/team#${slug}`;
const url = (path) => `${SITE}${path}`;

const SERVICES = [
    'Google Ads & Paid Media Management',
    'SEO & Local Search',
    'AI Search Optimization (AEO / GEO)',
    'Website Design & Development',
    'Conversion Tracking & CRM Integration',
    'Content, Email & Social Media',
];

// Compact Person reference: enough to resolve on any page; full nodes live on /team.
const personRef = (m) => ({ '@type': 'Person', '@id': personId(m.slug), name: m.name, jobTitle: m.role });

const organization = () => ({
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: 'LFX Media',
    legalName: 'DMA Creations LLC',
    alternateName: 'LFX Media Digital Marketing',
    url: `${SITE}/`,
    logo: `${SITE}/logo-square.png`,
    image: `${SITE}/logo-square.png`,
    description: 'Digital marketing agency for service businesses: Google Ads management, SEO and local search, AI search optimization (AEO/GEO), website design and development, and conversion tracking.',
    foundingDate: '2020',
    founder: personRef(teamMeta.find((m) => m.slug === 'lachlan')),
    email: 'lachlan@lfxmedia.io',
    telephone: '+1-479-397-3267',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Eureka Springs',
        addressRegion: 'AR',
        addressCountry: 'US',
    },
    areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'State', name: 'Arkansas' },
        { '@type': 'State', name: 'California' },
        { '@type': 'State', name: 'Texas' },
        { '@type': 'State', name: 'Louisiana' },
        { '@type': 'State', name: 'Colorado' },
    ],
    sameAs: [
        'https://www.linkedin.com/company/lfx-media/',
        'https://www.instagram.com/lfxmedia/',
        'https://github.com/lfranckx',
    ],
    knowsAbout: [
        'Google Ads management', 'Local SEO', 'Answer engine optimization', 'Generative engine optimization',
        'Conversion tracking', 'CallRail', 'HubSpot', 'WordPress development', 'Shopify development', 'React development',
        'Insulation contractor marketing', 'Senior living marketing', 'Home services lead generation',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: SERVICES.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, provider: { '@id': ORG_ID } },
        })),
    },
    employee: teamMeta.map(personRef),
});

const website = () => ({
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE}/`,
    name: 'LFX Media',
    publisher: { '@id': ORG_ID },
});

const webPage = (path, type = 'WebPage', extra = {}) => ({
    '@type': type,
    '@id': `${url(path)}#webpage`,
    url: url(path),
    name: routes[path].title,
    description: routes[path].description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: url(routes[path].image) },
    inLanguage: 'en-US',
    ...(path === '/' ? {} : { breadcrumb: { '@id': `${url(path)}#breadcrumb` } }),
    ...extra,
});

// crumbs: [[name, path], ...] after Home.
const breadcrumb = (path, crumbs) => ({
    '@type': 'BreadcrumbList',
    '@id': `${url(path)}#breadcrumb`,
    itemListElement: [['Home', '/'], ...crumbs].map(([name, p], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: url(p),
    })),
});

const faqPage = () => ({
    '@type': 'FAQPage',
    '@id': `${SITE}/#faq`,
    isPartOf: { '@id': `${SITE}/#webpage` },
    mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
});

// Case studies. Add a new one here and it is picked up by /results and its own page.
// Only set dates you can stand behind; leave datePublished out if unknown.
export const CASE_STUDIES = [
    {
        path: '/results/advanced-insulation-system',
        crumb: 'Advanced Insulation System',
        headline: 'Advanced Insulation System Case Study: 8.8× Return on Qualified Leads from Google Ads',
        about: { '@type': 'Organization', name: 'Advanced Insulation System', url: 'https://advancedinsulationsystemsd.com/' },
        datePublished: '2026-07-15',
        dateModified: '2026-10-24',
    },
    {
        path: '/results/forever-curls',
        crumb: 'Forever Curls',
        headline: 'Forever Curls Case Study: +685% Sales for an E-Commerce Hair Brand',
        about: { '@type': 'Organization', name: 'Forever Curls by Leysa' },
    },
];

const article = (cs) => ({
    '@type': 'Article',
    '@id': `${url(cs.path)}#article`,
    headline: cs.headline,
    description: routes[cs.path].description,
    image: url(routes[cs.path].image),
    about: cs.about,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    ...(cs.datePublished ? { datePublished: cs.datePublished } : {}),
    ...(cs.dateModified ? { dateModified: cs.dateModified } : {}),
    mainEntityOfPage: { '@id': `${url(cs.path)}#webpage` },
    isPartOf: { '@id': `${url(cs.path)}#webpage` },
    inLanguage: 'en-US',
});

const person = (m) => ({
    '@type': 'Person',
    '@id': personId(m.slug),
    name: m.name,
    jobTitle: m.role,
    description: m.bio[0],
    knowsAbout: m.focus,
    worksFor: { '@id': ORG_ID },
    url: personId(m.slug),
    ...(m.links?.email ? { email: m.links.email.replace('mailto:', '') } : {}),
    ...(m.links?.linkedin || m.links?.github
        ? { sameAs: [m.links.linkedin, m.links.github].filter(Boolean) }
        : {}),
});

const pageNodes = {
    '/': () => [webPage('/'), faqPage()],
    '/results': () => [
        webPage('/results', 'CollectionPage', {
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: CASE_STUDIES.map((cs, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: cs.headline,
                    url: url(cs.path),
                })),
            },
        }),
        breadcrumb('/results', [['Case Studies', '/results']]),
    ],
    '/team': () => [
        webPage('/team', 'AboutPage', { mainEntity: { '@id': ORG_ID } }),
        breadcrumb('/team', [['Team', '/team']]),
        ...teamMeta.map(person),
    ],
    '/contact': () => [
        webPage('/contact', 'ContactPage', { mainEntity: { '@id': ORG_ID } }),
        breadcrumb('/contact', [['Contact', '/contact']]),
    ],
    '/subscribe': () => [webPage('/subscribe'), breadcrumb('/subscribe', [['Newsletter', '/subscribe']])],
    '/privacy-policy': () => [webPage('/privacy-policy'), breadcrumb('/privacy-policy', [['Privacy Policy', '/privacy-policy']])],
    '/terms-and-conditions': () => [webPage('/terms-and-conditions'), breadcrumb('/terms-and-conditions', [['Terms & Conditions', '/terms-and-conditions']])],
};

for (const cs of CASE_STUDIES) {
    pageNodes[cs.path] = () => [
        webPage(cs.path),
        breadcrumb(cs.path, [['Case Studies', '/results'], [cs.crumb, cs.path]]),
        article(cs),
    ];
}

/** One @graph for a route, or null for routes without schema (404 etc.). */
export function schemaFor(pathname) {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
    const build = pageNodes[path];
    if (!build) return null;
    return { '@context': 'https://schema.org', '@graph': [organization(), website(), ...build()] };
}

/** Serialized for a <script type="application/ld+json"> tag. */
export function schemaJson(pathname) {
    const graph = schemaFor(pathname);
    return graph ? JSON.stringify(graph).replace(/</g, '\\u003c') : null;
}

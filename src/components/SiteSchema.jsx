import React from 'react';
import team from '../data/team';

/**
 * Organization / ProfessionalService JSON-LD for LFX Media.
 * Rendered once on the homepage; React 19 hoists <script> into <head>.
 */
const ORG_ID = 'https://lfxmedia.io/#organization';

export default function SiteSchema() {
    const org = {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'ProfessionalService'],
        '@id': ORG_ID,
        name: 'LFX Media',
        legalName: 'DMA Creations LLC',
        alternateName: 'LFX Media Digital Marketing',
        url: 'https://lfxmedia.io/',
        logo: 'https://lfxmedia.io/logo-square.png',
        image: 'https://lfxmedia.io/logo-square.png',
        description: 'Digital marketing agency for service businesses: Google Ads management, SEO and local search, AI search optimization (AEO/GEO), website design and development, and conversion tracking.',
        foundingDate: '2020',
        founder: { '@type': 'Person', '@id': 'https://lfxmedia.io/team#lachlan' },
        email: 'lachlan@lfxmedia.io',
        telephone: '+1-408-499-2830',
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
            itemListElement: [
                'Google Ads & Paid Media Management',
                'SEO & Local Search',
                'AI Search Optimization (AEO / GEO)',
                'Website Design & Development',
                'Conversion Tracking & CRM Integration',
                'Content, Email & Social Media',
            ].map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, provider: { '@id': ORG_ID } } })),
        },
        employee: team.map(m => ({ '@type': 'Person', '@id': `https://lfxmedia.io/team#${m.slug}` })),
    };

    const people = team.map(m => ({
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `https://lfxmedia.io/team#${m.slug}`,
        name: m.name,
        jobTitle: m.role,
        worksFor: { '@id': ORG_ID },
        url: `https://lfxmedia.io/team#${m.slug}`,
        ...(m.links?.linkedin ? { sameAs: [m.links.linkedin] } : {}),
    }));

    const site = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://lfxmedia.io/#website',
        url: 'https://lfxmedia.io/',
        name: 'LFX Media',
        publisher: { '@id': ORG_ID },
    };

    return (
        <>
            <script type='application/ld+json'>{JSON.stringify(org)}</script>
            <script type='application/ld+json'>{JSON.stringify(site)}</script>
            {people.map(p => <script key={p['@id']} type='application/ld+json'>{JSON.stringify(p)}</script>)}
        </>
    );
}

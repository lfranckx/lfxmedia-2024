// Six service cards on the homepage. Keep each `blurb` ≤ 20 words.
const services = [
    {
        slug: 'paid-ads',
        icon: 'fas fa-bullseye',
        title: 'Google Ads & Paid Media',
        blurb: 'Search, Performance Max, LSA and Meta campaigns built around calls and booked jobs — not clicks.',
        detail: {
            heading: 'Google Ads management for service businesses',
            body: 'We build Search campaigns split by service and city, write the ads, build the landing pages, and tune bidding against real calls and quote forms. Meta and LinkedIn where they earn their keep: retargeting, local awareness, B2B.',
            includes: ['Campaign structure & keyword strategy', 'Dedicated landing pages', 'Negative keyword and search-term reviews', 'Call tracking + form tracking fed back to Google', 'Weekly check-ins, monthly reporting'],
            link: { label: 'See the AIS case study', to: '/results/advanced-insulation-system' },
        },
    },
    {
        slug: 'seo',
        icon: 'fas fa-search-location',
        title: 'SEO & Local Search',
        blurb: 'Technical SEO, service and city pages, Google Business Profile and reviews — so you show up when people are ready to buy.',
        detail: {
            heading: 'Search engine optimization that compounds',
            body: 'Technical audits, site structure, service and location pages, internal linking, Google Business Profile optimization and review velocity. Content written for buyers, not for word count.',
            includes: ['Technical SEO audit & fixes', 'On-page optimization & schema', 'Local SEO & Google Business Profile', 'Content strategy & blog writing', 'Backlinks, citations & digital PR'],
            link: { label: 'Forever Curls: +162% organic traffic', to: '/results/forever-curls' },
        },
    },
    {
        slug: 'aeo',
        icon: 'fas fa-robot',
        title: 'AI Search Optimization',
        blurb: 'Get recommended in ChatGPT, Gemini, Perplexity and Google AI Overviews — AEO and GEO done with structured, citable content.',
        detail: {
            heading: 'Answer engine optimization (AEO / GEO)',
            body: 'AI assistants recommend businesses with clear entities, structured data, direct answers and consistent mentions across trusted sources. We build that footprint and track the prompts your buyers actually type.',
            includes: ['Entity & schema cleanup (Organization, Service, FAQ)', 'Question-and-answer content for buyer prompts', 'AI visibility tracking (ChatGPT, Gemini, Perplexity, AIO)', 'Citations, reviews & third-party mentions'],
            link: { label: 'Talk to us about AI visibility', to: '/contact' },
        },
    },
    {
        slug: 'web',
        icon: 'fas fa-laptop-code',
        title: 'Website Design & Development',
        blurb: 'WordPress, Shopify, Squarespace, Wix and custom React/Node builds. Fast, on brand, and built to convert.',
        detail: {
            heading: 'Websites built to convert',
            body: 'We design and build the site, then keep it fast, secure and current. Landing pages, e-commerce, course platforms and custom web apps — and you own everything we build.',
            includes: ['WordPress, Shopify, Squarespace, Wix, Webflow', 'Custom React / Node.js applications', 'Landing pages & conversion optimization', 'Hosting, maintenance & security'],
            link: { label: 'Meet the team that builds it', to: '/team' },
        },
    },
    {
        slug: 'tracking',
        icon: 'fas fa-chart-line',
        title: 'Conversion Tracking & CRM',
        blurb: 'GA4, Tag Manager, CallRail, HubSpot and Salesforce wired together so you know which dollar produced which job.',
        detail: {
            heading: 'Tracking you can make decisions on',
            body: 'Calls, forms, bookings and chats tracked end to end, scored, and pushed into your CRM with source attached. Then fed back into Google and Meta so the algorithms optimize for revenue, not clicks.',
            includes: ['GA4 & Google Tag Manager', 'CallRail call tracking & scoring', 'HubSpot / Salesforce integration & attribution', 'Enhanced conversions, UTMs, GCLID persistence'],
            link: { label: 'How it worked for AIS', to: '/results/advanced-insulation-system' },
        },
    },
    {
        slug: 'content',
        icon: 'fas fa-pen-nib',
        title: 'Content, Email & Social',
        blurb: 'Blogs, email flows, social calendars and GBP posts that keep your brand consistent everywhere a customer finds you.',
        detail: {
            heading: 'Content that supports the funnel',
            body: 'SEO blog writing, Klaviyo and HubSpot email automation, monthly social calendars and ready-to-post graphics, Google Business Profile posts. Written in your voice, measured against your goals.',
            includes: ['SEO blog & landing page copy', 'Email & SMS automation (Klaviyo, Mailchimp, HubSpot)', 'Social media calendars & graphics', 'Google Business Profile posts'],
            link: { label: 'Meet Raquel', to: '/team#raquel' },
        },
    },
];

export default services;

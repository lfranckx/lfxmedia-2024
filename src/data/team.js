import lachlan from '../images/team/lachlan.webp';
import raquel from '../images/team/raquel.webp';
import zahid from '../images/team/zahid.webp';

const team = [
    {
        slug: 'lachlan',
        name: 'Lachlan Franckx',
        role: 'CEO & Director',
        photo: lachlan,
        focus: ['Paid Ads', 'Conversion Tracking', 'Web Development', 'Strategy'],
        bio: [
            'Lachlan founded LFX Media to give service-based businesses something most agencies skip: a straight line from ad spend to booked jobs. He runs strategy and paid media across Google and Meta, builds the tracking behind every campaign, and still writes code — WordPress, Shopify, and custom React/Node builds.',
            'Before the agency, he spent years as a freelance developer for brands in beauty, hospitality, healthcare, and construction. That mix of engineering and marketing is why LFX clients get landing pages, CallRail, GA4, and CRM attribution set up properly instead of bolted on later.',
        ],
        links: {
            linkedin: 'https://www.linkedin.com/company/lfx-media/',
            github: 'https://github.com/lfranckx',
            email: 'mailto:lachlan@lfxmedia.io',
        },
    },
    {
        slug: 'raquel',
        name: 'Raquel D. Franckx',
        role: 'Social Media & SEO Specialist',
        photo: raquel,
        focus: ['Social Media', 'Content & SEO', 'Graphic Design', 'Brand Voice'],
        bio: [
            'Raquel’s passion for art and design has been a lifelong journey, whether on a tangible canvas or a digital one. At LFX Media she’s the creative force behind everything from infographics and brochures to menus and web graphics.',
            'She leads social media strategy and SEO content for our clients — blog writing, Google Business Profile posts, and the visuals that make a brand feel consistent everywhere it shows up. More than partners in life, Lachlan and Raquel are a creative duo who combine their talents to bring ideas to life.',
        ],
        links: {
            email: 'mailto:raquel@lfxmedia.io',
        },
    },
    {
        slug: 'zahid',
        name: 'Zahid Ilahi',
        role: 'Web Developer & SEO Specialist',
        photo: zahid,
        focus: ['WordPress & Shopify', 'Technical SEO', 'Site Speed', 'Schema & AEO'],
        bio: [
            'Zahid builds and maintains client websites across WordPress, Shopify, and custom stacks, with a focus on clean architecture, fast load times, and pages that are easy for both people and search engines to read.',
            'On the SEO side he handles technical audits, on-page optimization, schema markup, and the structured content that helps our clients show up in traditional search and AI-generated answers. If something on a site is slow, broken, or not indexing, Zahid is usually the one who finds out why.',
        ],
        links: {
            linkedin: 'https://www.linkedin.com/in/zahid-ilahi-990840263/',
        },
    },
];

export default team;

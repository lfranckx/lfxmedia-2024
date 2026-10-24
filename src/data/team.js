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
            'Lachlan founded LFX Media in 2020 to give service businesses a straight line from ad spend to booked jobs. He leads strategy and paid media across Google and Meta, builds the conversion tracking behind every campaign, and still writes code.',
            'A full-stack developer before he was an agency owner, he builds in WordPress, Shopify and custom React/Node. That mix is why LFX clients get landing pages, CallRail, GA4 and CRM attribution set up properly from day one.',
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
            'Raquel leads social media strategy and SEO content for LFX clients — blog writing, Google Business Profile posts, email campaigns, and the graphics that keep a brand consistent everywhere it shows up.',
            'A lifelong artist and designer, she handles everything from web design and social media graphics to brand assets, infographics and print. Lachlan and Raquel are partners in life as well as business, and have run LFX together since the beginning.',
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
            'Zahid builds and maintains client websites on WordPress, Shopify and custom stacks, with a focus on clean architecture, fast load times, and pages that are easy for people and search engines to read.',
            'On the SEO side he runs technical audits, on-page optimization, schema markup and the structured content that helps clients appear in both traditional search and AI-generated answers.',
        ],
        links: {
            linkedin: 'https://www.linkedin.com/in/zahid-ilahi-990840263/',
        },
    },
];

export default team;

import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import '../../styles/pages/CaseStudy.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ais from '../../images/ais-logo-center-aligned-2.png';
import leysa from '../../images/leysa.png';
import ContactBar from '../ContactBar';

const STUDIES = [
    {
        slug: 'advanced-insulation-system',
        tag: 'Google Ads • Landing Pages • CallRail • HubSpot',
        title: 'Advanced Insulation System',
        summary: 'San Diego insulation contractor, with us since they opened in 2023. Google Ads built from zero into a tracked, scalable lead engine.',
        stats: [
            { value: '8.8×', label: 'return on qualified leads' },
            { value: '14.6%', label: 'ad-click conversion rate' },
            { value: '3,000+', label: 'calls & quote forms' },
        ],
        img: ais, alt: 'Advanced Insulation System', visual: 'ais', featured: true,
    },
    {
        slug: 'forever-curls',
        tag: 'Shopify • SEO • Paid Social',
        title: 'Forever Curls by Leysa',
        summary: 'Curly-hair education and e-commerce brand. Shopify rebuild, SEO and paid growth — first year under management vs. the year before.',
        stats: [
            { value: '+685%', label: 'total sales' },
            { value: '+162%', label: 'organic traffic' },
            { value: '+47%', label: 'conversion rate' },
        ],
        img: leysa, alt: 'Forever Curls by Leysa', visual: 'leysa',
    },
];

export default function CaseStudies({ loading }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <title>Case Studies | Google Ads &amp; SEO Results for Service Businesses | LFX Media</title>
            <meta name='description' content='Real client results from LFX Media: an 8.8× return on qualified leads and 14.6% conversion rate for an insulation contractor, +685% sales for an e-commerce hair brand. Tracked numbers, not vanity metrics.' />

            <motion.div id='case-studies' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <header className={loading ? '' : 'fade-in-screen'}>
                    <p className='eyebrow'>Case studies</p>
                    <h1>Results we can show you the receipts for.</h1>
                    <h2>Every number comes from the client's own ad account, analytics or CRM: calls, forms and sales, not impressions.</h2>
                </header>

                <main className={loading ? '' : 'fade-in-screen'}>
                    <section className='study-list' aria-label='Case studies'>
                        {STUDIES.map(s => (
                            <article className={`study ${s.featured ? 'featured' : ''}`} key={s.slug}>
                                <div className={`visual ${s.visual}`}>
                                    <img src={s.img} alt={s.alt} loading='lazy' />
                                </div>
                                <div className='body'>
                                    <p className='tag'>{s.tag}</p>
                                    <h2>{s.title}</h2>
                                    <p className='summary'>{s.summary}</p>
                                    <ul className='mini-stats'>
                                        {s.stats.map(st => (
                                            <li key={st.label}>
                                                <div className='value'>{st.value}</div>
                                                <div className='label'>{st.label}</div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='btn-wrap'>
                                        <Link className='btn-secondary' to={`/results/${s.slug}`}>Read the case study <i className='fas fa-chevron-circle-right' /></Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>
                    <ContactBar />
                </main>
            </motion.div>
        </>
    );
}

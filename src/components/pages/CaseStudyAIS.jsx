import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import '../../styles/pages/CaseStudy.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ais from '../../images/ais-logo-center-aligned-2.png';
import ContactSection from '../ContactSection';

// Source: Google Ads + HubSpot, Advanced Insulation System account, Oct 2023 – Jun 2026
const STATS = [
    { value: '7×', label: 'Monthly lead volume', note: 'From ~18 leads/mo in the first quarter to ~128/mo in 2026' },
    { value: '3×', label: 'Conversion rate', note: '4.0% of ad clicks became a lead at launch — 13.9% today' },
    { value: '3,000+', label: 'Calls & quote requests', note: '3,088 leads in 33 months; 1,516 in the last 12' },
    { value: '~$180', label: 'Cost per qualified lead', note: 'For jobs worth thousands of dollars each' },
];

const CRM = [
    { year: '2024', value: 568, pct: 43 },
    { year: '2025', value: 1319, pct: 100 },
    { year: '2026', value: 1280, pct: 97, projected: true, display: '~1,280*' },
];

const JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Advanced Insulation System Case Study: 7× Monthly Leads from Google Ads',
    about: { '@type': 'Organization', name: 'Advanced Insulation System', url: 'https://advancedinsulationsystemsd.com/' },
    author: { '@type': 'Organization', name: 'LFX Media', url: 'https://lfxmedia.io' },
    publisher: { '@type': 'Organization', name: 'LFX Media', url: 'https://lfxmedia.io' },
    datePublished: '2026-07-15',
    dateModified: '2026-10-23',
    mainEntityOfPage: 'https://lfxmedia.io/results/advanced-insulation-system',
};

export default function CaseStudyAIS({ loading }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <title>Advanced Insulation System Case Study | 7× Monthly Leads from Google Ads | LFX Media</title>
            <meta name='description' content='How LFX Media took a new San Diego insulation contractor from zero to ~128 qualified leads a month: service-split Google Search campaigns, dedicated landing pages, CallRail, and HubSpot attribution. 13.9% conversion rate, ~$180 cost per lead.' />
            <script type='application/ld+json'>{JSON.stringify(JSON_LD)}</script>

            <motion.div id='case-study-ais' className='case-study' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <header className={loading ? '' : 'fade-in-screen'}>
                    <p className='eyebrow'><Link to='/results'>Case studies</Link> / Insulation</p>
                    <h1>From zero to 128 qualified leads a month.</h1>
                    <h2>Advanced Insulation System is a residential and commercial insulation contractor in San Diego. We built their Google Ads program from scratch in October 2023 and have run it since.</h2>
                    <div className='client-logo'>
                        <img src={ais} alt='Advanced Insulation System' />
                    </div>
                </header>

                <main className={loading ? '' : 'fade-in-screen'}>
                    <section className='stat-band' aria-label='Key results'>
                        {STATS.map(s => (
                            <div className='stat' key={s.label}>
                                <div className='value'>{s.value}</div>
                                <p className='label'>{s.label}</p>
                                <p className='note'>{s.note}</p>
                            </div>
                        ))}
                    </section>

                    <section className='prose'>
                        <h2>The starting point</h2>
                        <p>AIS opened its doors in late 2023 as a brand-new company with a solid crew and no online lead flow. The owner wanted a predictable stream of residential and commercial retail jobs — spray foam, attic, blown-in, crawl space, and more — without relying on word of mouth or waiting on referrals.</p>
                        <p>The brief was simple: every dollar spent on ads needed to be traceable to a phone call or a quote request, and the budget needed to scale only as the results proved out.</p>

                        <div className='callout'>
                            <p><strong>What counts as a lead here:</strong> a phone call or quote form that came from the ads. We don't count clicks, page views, or "engaged sessions." If it isn't a person asking about insulation, it isn't on the chart.</p>
                        </div>

                        <h2>What we built</h2>
                        <p>The system is built around how people actually shop for insulation: they Google it, then they call or fill out a form. Everything below exists to make that path short and measurable.</p>
                        <ul className='checks'>
                            <li><strong>One Google Search campaign, split by service.</strong> Separate ad groups for spray foam, attic, blown-in, crawl space and more — each with its own keywords, headlines, and negative keyword list so the budget follows real intent.</li>
                            <li><strong>A dedicated landing page per service.</strong> Mobile-first, branded to AIS, contact form above the fold. The client owns every page we build.</li>
                            <li><strong>CallRail + full conversion tracking.</strong> Every call and form is recorded and scored, then fed back into Google's bidding so the budget chases booked jobs instead of cheap clicks.</li>
                            <li><strong>HubSpot CRM with attribution.</strong> Every lead lands in one place with its source attached — calls, forms, follow-ups, and job status — so we can prove where jobs actually come from.</li>
                            <li><strong>Meta Ads, managed in the same program.</strong> Retargeting and local awareness to keep AIS in front of people who have already searched.</li>
                        </ul>

                        <h2>The phased playbook</h2>
                        <p>Month one is deliberately slow. We gather clean data before we ask Google to optimize toward anything — that discipline is why the account converts at 12%+ today instead of burning through budget on broad traffic.</p>
                    </section>

                    <section className='playbook' aria-label='90-day playbook'>
                        <div className='phase'>
                            <p className='month'>Month 1</p>
                            <h3>Launch &amp; learn</h3>
                            <p>Landing pages live, CallRail on, campaigns in max-clicks mode to gather cheap, clean data across every service.</p>
                        </div>
                        <div className='phase'>
                            <p className='month'>Month 2</p>
                            <h3>Optimize</h3>
                            <p>Shift to conversion bidding. Prune keywords that don't produce calls, push budget to the services and areas that do.</p>
                        </div>
                        <div className='phase'>
                            <p className='month'>Month 3+</p>
                            <h3>Scale &amp; decide</h3>
                            <p>Double down on winners, review real cost-per-lead together, and scale spend with data — not gut feel.</p>
                        </div>
                    </section>

                    <section className='prose'>
                        <h2>The results</h2>
                        <p>Over 33 months the account generated <strong>3,088 qualified leads</strong> — 1,516 of them in the last 12 months alone. Monthly lead volume went from roughly 18 in the first quarter to roughly 128 in 2026, a 7× increase. The conversion rate climbed from 4.0% of ad clicks at launch to 13.9%, comfortably inside the 10–15% range we target for local service accounts.</p>
                        <p>Ad spend scaled with the results: from about $3K/month at launch to about $25K/month today, for <strong>$562K+ in total managed spend</strong> at roughly $180 per qualified lead. In the client's first six months in business, the program helped drive over $2 million in sales.</p>
                    </section>

                    <section className='chart' aria-label='New HubSpot contacts per year'>
                        <p className='chart-title'>New contacts created in HubSpot per year</p>
                        <p className='chart-sub'>+132% year over year — 568 new leads in 2024 became 1,319 in 2025, and 2026 is holding that pace.</p>
                        <div className='bars'>
                            {CRM.map(b => (
                                <div className='bar' key={b.year}>
                                    <div className='num'>{b.display || b.value.toLocaleString()}</div>
                                    <div className={`fill ${b.projected ? 'projected' : ''}`} style={{ height: `${b.pct}%` }} role='img' aria-label={`${b.year}: ${b.value} new contacts${b.projected ? ' (projected)' : ''}`} />
                                </div>
                            ))}
                        </div>
                        <div className='labels'>
                            {CRM.map(b => <span key={b.year}>{b.year}</span>)}
                        </div>
                        <p className='source'>*CRM launched Nov 2023. 2026 shows Jan–mid-July actuals, on pace for ~1,280. Source: HubSpot and Google Ads, Advanced Insulation System accounts, Oct 2023 – Jun 2026.</p>
                    </section>

                    <section className='prose'>
                        <h3>Paid search drives 70% of the pipeline</h3>
                        <p>Of the 692 leads created in the CRM in 2026 so far, 488 came from the ads. Because every contact carries its source, the owner can see exactly which campaign produced which job — which is what makes the decision to scale an easy one.</p>

                        <div className='callout'>
                            <p><strong>Why this works for insulation specifically:</strong> jobs are worth thousands of dollars, the buyer searches with clear intent, and the decision happens on the phone. A tracked Search campaign with a strong landing page is the highest-leverage thing a contractor can run — as long as the tracking is honest.</p>
                        </div>
                    </section>

                    <div className='cta-row'>
                        <a className='btn-secondary' href='https://advancedinsulationsystemsd.com/' target='_blank' rel='noopener noreferrer'>Visit the client's site <i className='fas fa-chevron-circle-right' /></a>
                        <Link className='btn' to='/results'>All case studies</Link>
                    </div>

                    <ContactSection />
                </main>
            </motion.div>
        </>
    );
}

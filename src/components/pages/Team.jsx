import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import '../../styles/pages/Team.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import team from '../../data/team';
import ContactBar from '../ContactBar';

const ICONS = {
    linkedin: 'fab fa-linkedin-in',
    github: 'fab fa-github',
    email: 'fas fa-envelope',
};

export default function Team({ loading }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <title>Our Team | LFX Media — Digital Marketing &amp; Web Development</title>
            <meta name='description' content='Meet the LFX Media team: Lachlan Franckx (CEO & Director, paid media and tracking), Raquel Franckx (social media and SEO content) and Zahid Ilahi (web development and technical SEO). Strategy, build and tracking in-house.' />

            <motion.div
                id='team-page'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <p className='eyebrow'>The team</p>
                    <h1>Small team. Full stack.</h1>
                    <h2>Strategy, design, development and tracking handled in-house, so nothing gets lost between the plan and the live campaign.</h2>
                </header>

                <main className={loading ? '' : 'fade-in-screen'}>
                    <section className='team-grid' aria-label='Team members'>
                        {team.map((m, i) => (
                            <article className='member' key={m.slug} id={m.slug}>
                                <div className='photo-wrap'>
                                    <img src={m.photo} alt={`${m.name}, ${m.role} at LFX Media`} loading={i === 0 ? 'eager' : 'lazy'} width='900' height='1125' />
                                </div>
                                <div className='content'>
                                    <h3>{m.name}</h3>
                                    <p className='role'>{m.role}</p>
                                    <ul className='focus' aria-label='Focus areas'>
                                        {m.focus.map(f => <li key={f}>{f}</li>)}
                                    </ul>
                                    {m.bio.map((para, j) => <p className='bio' key={j}>{para}</p>)}
                                    <ul className='links'>
                                        {Object.entries(m.links).map(([k, href]) => (
                                            <li key={k}>
                                                <a href={href} target={k === 'email' ? undefined : '_blank'} rel='noopener noreferrer' aria-label={`${m.name} on ${k}`}>
                                                    <i className={ICONS[k]} aria-hidden='true'></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </section>

                    <section className='how-we-work'>
                        <h2>How we work together</h2>
                        <ul>
                            <li>
                                <h3>Strategy first</h3>
                                <p>Lachlan scopes the plan, budget and tracking before anything goes live, so every campaign has a number it's accountable to.</p>
                            </li>
                            <li>
                                <h3>Built in-house</h3>
                                <p>Zahid and Lachlan build the pages, forms and integrations. No hand-offs to a third-party dev shop.</p>
                            </li>
                            <li>
                                <h3>Content that compounds</h3>
                                <p>Raquel keeps the brand consistent across social, blog and local search, so paid traffic lands on something that converts.</p>
                            </li>
                        </ul>
                        <div className='btn-wrap'>
                            <Link className='btn-secondary' to='/results'>See the results <i className='fas fa-chevron-circle-right' /></Link>
                        </div>
                    </section>

                    <ContactBar />
                </main>
            </motion.div>
        </>
    );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.scss';
import { serviceBusinesses, beautyBrands } from '../data/projects';

function ProjectCard({ p }) {
    const [open, setOpen] = useState(false);
    const Cta = p.cta.to
        ? <Link to={p.cta.to} className='btn'>{p.cta.label} &#8594;</Link>
        : <a href={p.cta.href} target='_blank' rel='noopener noreferrer' className='btn'>{p.cta.label} &#8594;</a>;

    return (
        <li
            className={`card ${p.slug} ${open ? 'open' : ''}`}
            onClick={() => setOpen(o => !o)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o); } }}
            tabIndex={0}
            aria-expanded={open}
        >
            <div className='image-wrap'>
                <img src={p.img} alt={p.alt} loading='lazy' />
            </div>
            <div className='content-wrap'>
                <div className='text-wrap'>
                    <p>{p.blurb}</p>
                </div>
                <div className='btn-wrap' onClick={(e) => e.stopPropagation()}>{Cta}</div>
            </div>
        </li>
    );
}

export default function Projects() {
    return (
        <>
            <section className='projects' id='projects'>
                <h2>Service businesses we've grown</h2>
                <p className='description'>Insulation contractors, senior living communities, campgrounds, restaurants and local practices. Many of these clients started with us from day one and are now leaders in their markets.</p>
                <p className='h3'>Want the full list? <span><a className='email' href='mailto:lachlan@lfxmedia.io'>Email us.</a></span></p>
                <div className='btn-wrap'>
                    <Link className='btn-secondary' to='/results'>See the case studies <i className="fas fa-chevron-circle-right"></i></Link>
                </div>
                <ul>
                    {serviceBusinesses.map(p => <ProjectCard key={p.slug} p={p} />)}
                </ul>
            </section>

            <section className='projects'>
                <h2>Beauty &amp; education brands</h2>
                <p className='description'>Shopify stores, course platforms and brand sites for stylists, educators and creative agencies — with the SEO, email and paid media to grow them.</p>
                <p className='h3'>Want the full list? <span><a className='email' href='mailto:lachlan@lfxmedia.io'>Email us.</a></span></p>
                <div className='btn-wrap'>
                    <Link className='btn-secondary' to='/results/forever-curls'>Forever Curls case study <i className="fas fa-chevron-circle-right"></i></Link>
                </div>
                <ul>
                    {beautyBrands.map(p => <ProjectCard key={p.slug} p={p} />)}
                </ul>
            </section>
        </>
    );
}

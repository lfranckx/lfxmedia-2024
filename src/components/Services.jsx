import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.scss';
import '../styles/ServicesPopup.scss';
import services from '../data/services';

export default function Services() {
    const [openSlug, setOpenSlug] = useState(null);
    const open = services.find(s => s.slug === openSlug);

    return (
        <>
            <section id='services' aria-label='Services'>
                <ul>
                    {services.map(s => (
                        <li key={s.slug}>
                            <div className='card'>
                                <i className={`icon ${s.icon}`} aria-hidden='true'></i>
                                <h2>{s.title}</h2>
                                <p>{s.blurb}</p>
                                <div className='btn-wrap'>
                                    <button type='button' className='btn-secondary' onClick={() => setOpenSlug(s.slug)} aria-haspopup='dialog'>
                                        Learn More <i className="fas fa-chevron-circle-right" aria-hidden='true'></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {open && (
                <section id='services-popup' role='dialog' aria-modal='true' aria-labelledby='services-popup-title' onClick={() => setOpenSlug(null)}>
                    <div className='content-wrap' onClick={(e) => e.stopPropagation()}>
                        <ul className='services-list'>
                            <li className='services-list-item'>
                                <div className='content'>
                                    <div className='wrap'>
                                        <h2 id='services-popup-title'>{open.detail.heading}</h2>
                                        <p>{open.detail.body}</p>
                                    </div>
                                    <div className='wrap'>
                                        <h3>What's included</h3>
                                        <ul>
                                            {open.detail.includes.map(i => <li key={i}>{i}</li>)}
                                        </ul>
                                    </div>
                                    <div className='btn-wrap'>
                                        <Link className='btn-secondary' to={open.detail.link.to} onClick={() => setOpenSlug(null)}>
                                            {open.detail.link.label} <i className="fas fa-chevron-circle-right" aria-hidden='true'></i>
                                        </Link>
                                    </div>
                                    <button type='button' className='btn' onClick={() => setOpenSlug(null)}>Close</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import faq from '../data/faq';
import '../styles/Faq.scss';

export default function Faq() {
    const [openIdx, setOpenIdx] = useState(0);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };

    return (
        <section id='faq' aria-labelledby='faq-title'>
            <script type='application/ld+json'>{JSON.stringify(schema)}</script>
            <div className='container'>
                <h2 id='faq-title'>Questions we get on the first call</h2>
                <ul>
                    {faq.map((f, i) => {
                        const open = i === openIdx;
                        return (
                            <li key={f.q} className={open ? 'open' : ''}>
                                <h3>
                                    <button type='button' aria-expanded={open} aria-controls={`faq-a-${i}`} id={`faq-q-${i}`} onClick={() => setOpenIdx(open ? -1 : i)}>
                                        <span>{f.q}</span>
                                        <svg viewBox='0 0 24 24' aria-hidden='true'><path d='M6 9l6 6 6-6' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'/></svg>
                                    </button>
                                </h3>
                                <div id={`faq-a-${i}`} role='region' aria-labelledby={`faq-q-${i}`} className='answer' hidden={!open}>
                                    <p>{f.a}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <p className='more'>Something else? <Link to='/contact'>Ask us directly.</Link></p>
            </div>
        </section>
    );
}

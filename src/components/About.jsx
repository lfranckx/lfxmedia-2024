import React from 'react';
import '../styles/About.scss';
import { Link } from 'react-router-dom';

export default function About () {
    return (
        <>
            <section id='about'>
                <div className='container'>
                    <h2>A full marketing team for service businesses — strategy, build and tracking under one roof.</h2>
                    <p>LFX Media runs Google Ads, SEO and AI search optimization for companies that live on inbound leads, and we build the websites and tracking those campaigns depend on. Founded by Lachlan Franckx in 2020 and based in Eureka Springs, Arkansas, we work with clients nationwide.</p>
                    <p>Most of our clients have been with us for years — several since the day they opened — and have grown into leaders in their markets. Insulation and construction, senior living, home services, hospitality, healthcare, and beauty and education brands.</p>
                    <div className='btn-wrap'>
                        <Link className='btn btn-on-brand' to='/team'>Meet the team</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
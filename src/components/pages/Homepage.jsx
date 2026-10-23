import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import computer from '../../images/computer.png';
import { motion } from 'framer-motion';

import About from '../About';
import Projects from '../Projects';
import Services from '../Services';
import Testimonials from '../Testimonials';
import ContactBar from '../ContactBar';

export default function Homepage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { loading } = props;
    
    return (
        <>
            <>
                <title>Your Partner for Web Design, SEO &amp; Paid Ads | LFX Media</title>
                <meta name='description' content="LFX Media is your go-to team for digital excellence. With expertise in Medical, Construction, E-Commerce, and Beauty, we connect your business to its target audience"/>
                <meta name='keywords' content='Web Development, Digital Marketing Services, SEO Strategies, Marketing Agency, PPC Advertising, Google Ads, Facebook Advertising, Meta Advertising, Online Marketing Solutions' />
            </>
            
            <motion.div 
                id="homepage"
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <h1>Web Development &amp; Digital Marketing Solutions</h1>
                    <h2>Beautiful design. Smart strategy. Measurable growth.</h2>
                    <div className='btn-wrap'>
                        <button
                            type="button"
                            className='btn-secondary'
                            onClick={() => document.querySelector('.projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >
                            View our work <i className="fas fa-chevron-circle-right" />
                        </button>
                    </div>
                    <div className='image-wrap'>
                        <img src={computer} alt='desktop workspace' />
                    </div>
                </header>
                <main className={loading ? '' : 'fade-in-screen'}>
                    <About />
                    <Services />
                    <Projects />
                    <Testimonials />
                    <ContactBar />
                </main>
            </motion.div>
        </>
    );
}
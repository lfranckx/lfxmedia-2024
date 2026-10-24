import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import WorkspaceArt from '../WorkspaceArt';
import { motion } from 'framer-motion';

import About from '../About';
import Projects from '../Projects';
import Services from '../Services';
import Testimonials from '../Testimonials';
import ContactBar from '../ContactBar';
import Faq from '../Faq';
import SiteSchema from '../SiteSchema';

export default function Homepage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { loading } = props;
    
    return (
        <>
            <>
                <title>LFX Media | Google Ads, SEO &amp; Web Design for Service Businesses</title>
                <meta name='description' content="Digital marketing agency for service businesses: Google Ads management, local SEO, AI search optimization, and websites built to convert — with every lead tracked to the dollar." />
            </>
            
            <SiteSchema />
            <motion.div 
                id="homepage"
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <h1>Marketing that brings in jobs, not just clicks.</h1>
                    <h2>Google Ads, SEO, AI search visibility and websites built to convert — for contractors, senior living, home services and local businesses. Every lead tracked.</h2>
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
                        <WorkspaceArt />
                    </div>
                </header>
                <main className={loading ? '' : 'fade-in-screen'}>
                    <About />
                    <Services />
                    <Projects />
                    <Testimonials />
                    <Faq />
                    <ContactBar />
                </main>
            </motion.div>
        </>
    );
}
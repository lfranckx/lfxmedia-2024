import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import computer from '../../images/computer.png';
import { Link } from 'react-scroll';
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
            <Helmet>
                <title>Expert Web Development, Digital Marketing, &amp; SEO Services | LFX Media</title>
                <meta name='description' content="LFX Media is your go-to team for digital excellence. With expertise in Medical, Construction, E-Commerce, and Beauty, we connect your business to its target audience"/>
                <meta name='keywords' content='Web Development, Digital Marketing Services, SEO Strategies, Marketing Agency, PPC Advertising, Google Ads, Facebook Advertising, Meta Advertising, Online Marketing Solutions' />
            </Helmet>
            
            <motion.div 
                id="homepage"
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <h1>Web Development &amp; SEO Solutions</h1>
                    <h2>We craft beautiful and functional websites that get results.</h2>
                    <div className='btn-wrap'>
                        <Link className='btn-secondary' activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={700}>
                            View our work <i className="fas fa-chevron-circle-right" />
                        </Link>
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
import React, { useEffect, useState } from 'react';
import '../../styles/pages/MeetRaquel.scss';
import ContactSection from '../ContactSection';
import ServicesPopup from '../ServicesPopup';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import computer from '../../images/computer.png';
import avatar from '../../images/raquel/raq-avatar-2-mix.png';
import raquel_1 from '../../images/raquel/headshot-1.png';
import raquel_2 from '../../images/raquel/headshot-2.png';

export default function MeetRaquel(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [copywritingCardOpen, toggleCopywritingCard] = useState(false);
    const [socialMediaCardOpen, toggleSocialMediaCard] = useState(false);
    const [printDesignCardOpen, togglePrintDesignCard] = useState(false);

    const { loading } = props;

    return (
        <>
            <Helmet >
                <title>Raquel D. Franckx | Digital Design &amp; Social Media at LFX Media</title>
                <meta name='description' content='Meet Raquel, the Digital Design &amp; Social Media Content Manager at LFX Media. With expertise in crafting visuals and strategies, she elevates brands online.'/>
            </Helmet>

            <motion.div 
                id='meet-raquel'
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <div className='headshot-wrap flex column center'>
                        <div className='image-wrap'>
                            <img src={raquel_1} alt='Meet Raquel D. Franckx' />
                        </div>
                    </div>

                    <div className='title-wrap'>
                        <h1 class='page-title'>Meet Raquel D. Franckx</h1>
                        <h2>Digital Design &amp; Social Media Content Manager at LFX Media</h2>
                    </div>

                    <div className='image-wrap'>
                        <img src={computer} alt='desktop workspace' />
                    </div>
                </header>

                <main className={loading ? '' : 'fade-in-screen'}>
                    <section className='about'>
                        <div className='container'>
                            <p>Raquel’s passion for art and design has been a lifelong journey, whether on a tangible canvas or a digital one. At LFX Media, she’s the creative force behind everything from infographics and brochures to menus and web design. Her artistic vision also extends into blog writing and social media marketing, helping our clients connect with their audience through compelling visuals and content. More than just partners in life, Lachlan and Raquel are also a dynamic creative duo, combining their talents to bring ideas to life.</p>
                        </div>
                    </section>
                    
                    <section id='services'>
                        <ul>
                            <li>
                                <div className='card'>
                                    <i className="fa-solid fas fa-i-cursor icon"></i>
                                    <h2>Copywriting</h2>
                                    <p>Writing persuasive, audience-focused content and SEO-driven blogs that engage readers, improve search rankings, and amplify your brand’s voice.</p>

                                    <div className='btn-wrap'>
                                        <button className='btn-secondary' onClick={() => toggleCopywritingCard(!copywritingCardOpen)}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='card'>
                                <i className="fa-solid fas fa-hashtag icon"></i>
                                    <h2>Social Media Strategy</h2>
                                    <p>Crafting tailored strategies and content that represent your brand, connect with the right audience, and drive measurable results.</p>
                                    <div className='btn-wrap'>
                                        <button className='btn-secondary' onClick={() => {toggleSocialMediaCard(!socialMediaCardOpen)}}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='card'>
                                    <i className="fa-solid fas fa-pen-nib icon"></i>
                                    <h2>Digital &amp; Print Design</h2>
                                    <p>Designing captivating flyers, menus, social media graphics, websites, and marketing materials that bring your brand to life.</p>
                                    <div className='btn-wrap'>
                                        <button className='btn-secondary' onClick={() => {togglePrintDesignCard(!printDesignCardOpen)}}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <ContactSection />

                    <ServicesPopup
                        toggleCopywritingCard={toggleCopywritingCard}
                        toggleSocialMediaCard={toggleSocialMediaCard}
                        togglePrintDesignCard={togglePrintDesignCard}
                        copywritingCardOpen={copywritingCardOpen}
                        socialMediaCardOpen={socialMediaCardOpen}
                        printDesignCardOpen={printDesignCardOpen}
                    />
                </main>
            </motion.div>
        </>
    );
}
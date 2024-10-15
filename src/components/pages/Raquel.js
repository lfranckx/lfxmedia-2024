import React, { useEffect, useState } from 'react';
import '../../styles/pages/Raquel.scss';
import { Helmet } from 'react-helmet';
import ContactSection from '../ContactSection';
import { motion } from 'framer-motion';
import raquel_1 from '../../images/raquel/headshot-1.png';
import raquel_2 from '../../images/raquel/headshot-2.png';

export default function Raquel(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [salesCardOpen, toggleSalesCard] = useState(false);
    const [trafficCardOpen, toggleTrafficCard] = useState(false);
    const [returningCardOpen, toggleReturningCard] = useState(false);
    const [conversionCardOpen, toggleConversionCard] = useState(false);

    const { loading } = props;

    return (
        <>
            <Helmet >
                <title>Raquel D. Franckx | LFX Media</title>
                <meta name='description' content='Meet Raquel, the Digital Design &amp; Social Media Content Manager at LFX Media. From social media marketing to graphic design, Raquel delivers creative solutions for your brand.'/>
            </Helmet>
            <motion.div 
                id='about-raquel'
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <div className='flex-wrap row-reverse'>
                        <h1 class='page-title'>Design &amp; Social Media Content</h1>
                        <div className='image-wrap'>
                            <img class='headshot-1' src={raquel_1} alt='Raquel D. Franckx' />
                        </div>
                    </div>
                </header>
                <main className={loading ? '' : 'fade-in-screen'}>
                    <section className='meet-raquel'>
                        <h2 className='section-title'>Meet Raquel:</h2>
                        <p>Raquel’s passion for art and design has been a lifelong journey, whether on a tangible canvas or a digital one. At LFX Media, she’s the creative force behind everything from infographics and brochures to menus and web design. Her artistic vision also extends into blog writing and social media marketing, helping our clients connect with their audience through compelling visuals and content. More than just partners in life, Lachlan and Raquel are also a dynamic creative duo, combining their talents to bring ideas to life.</p>
                    </section>
                    



                    {/* <div className='wrap'>
                        <div className='image-wrap'>
                            <img class='headshot-2' src={raquel_2} alt='Raquel D. Franckx' />
                        </div>
                        <div className='row'>
                            <h2 className='section-title'>Meet Raquel:</h2>
                            <p>Raquel’s passion for art and design has been a lifelong journey, whether on a tangible canvas or a digital one. At LFX Media, she’s the creative force behind everything from infographics and brochures to menus and web design. Her artistic vision also extends into blog writing and social media marketing, helping our clients connect with their audience through compelling visuals and content. More than just partners in life, Lachlan and Raquel are also a dynamic creative duo, combining their talents to bring ideas to life.</p>
                        </div>
                    </div> */}
                    <ContactSection />
                </main>
            </motion.div>
        </>
    )
}
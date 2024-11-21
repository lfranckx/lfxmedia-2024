import React, { useEffect, useState } from 'react';
import '../../styles/Header.scss';
import '../../styles/pages/Results.scss';
import { Helmet } from 'react-helmet';
import computer from '../../images/computer.png';
import ResultsPopup from '../ResultsPopup';
import ContactSection from '../ContactSection';
import { motion } from 'framer-motion';

export default function Results(props) {
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
                <title>Client Success Stories | Case Studies &amp; Results | LFX Media</title>
                <meta name='description' content='Explore real client success stories from LFX Media. Discover how our digital marketing, SEO, and web development solutions increased sales by 685% and improved conversion rates by 47%.'/>
            </Helmet>
            <motion.div 
                id='results-page'
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <h1>2021 Client Case Study</h1>
                    <h2>Forever Curls by Leysa</h2>
                    <div className='image-wrap'>
                        <img src={computer} alt='desktop workspace' />
                    </div>
                </header>
                <main className={loading ? '' : 'fade-in-screen'}>
                    <section id='summary'>
                        <div className='container'>
                            <p>We started working with Leysa at the end of 2020 and we continue to work together today. Comparing the year I began managing the online store to the year prior, the company has made enormous improvements. We have an online brand that makes outstanding sales and has an excellent customer return rate. We are confident in the business's continued success because of its professional and easy-to-navigate store design. We expect continued growth through online advertising and maintaining strong visibility in search engines.</p>
                        </div>
                    </section>
                    <section id='results'>
                        <ul>
                            <li>
                                <div className='card'>
                                    <h2>Total Sales:</h2>
                                    <h3>+685%</h3>
                                    <div className='btn-wrap'>
                                        <button className="btn-secondary" onClick={() => toggleSalesCard(!salesCardOpen)}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='card'>
                                    <h2>Organic Traffic:</h2>
                                    <h3>+162%</h3>
                                    <div className='btn-wrap'>
                                        <button className="btn-secondary" onClick={() => toggleTrafficCard(!trafficCardOpen)}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='card'>
                                    <h2>Returning Customers:</h2>
                                    <h3>+40%</h3>
                                    <div className='btn-wrap'>
                                        <button className="btn-secondary" onClick={() => toggleReturningCard(!returningCardOpen)}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='card'>
                                    <h2>Conversion Rate:</h2>
                                    <h3>+47%</h3>
                                    <div className='btn-wrap'>
                                        <button className="btn-secondary" onClick={() => toggleConversionCard(!conversionCardOpen)}>Learn More <i className="fas fa-chevron-circle-right"></i></button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <ContactSection />
                    <ResultsPopup 
                        toggleSalesCard = {toggleSalesCard}
                        toggleTrafficCard = {toggleTrafficCard}
                        toggleReturningCard = {toggleReturningCard}
                        toggleConversionCard = {toggleConversionCard}
                        salesCardOpen = {salesCardOpen}
                        trafficCardOpen = {trafficCardOpen}
                        returningCardOpen = {returningCardOpen}
                        conversionCardOpen = {conversionCardOpen}
                    />
                </main>
            </motion.div>
        </>
    )
}
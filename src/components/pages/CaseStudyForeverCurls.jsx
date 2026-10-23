import React, { useEffect, useState } from 'react';
import '../../styles/Header.scss';
import '../../styles/pages/CaseStudy.scss';
import { Link } from 'react-router-dom';
import WorkspaceArt from '../WorkspaceArt';
import ResultsPopup from '../ResultsPopup';
import ContactSection from '../ContactSection';
import { motion } from 'framer-motion';

export default function CaseStudyForeverCurls(props) {
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
            <>
                <title>Forever Curls Case Study | +685% Sales for an E-Commerce Hair Brand | LFX Media</title>
                <meta name='description' content='How LFX Media grew Forever Curls by Leysa: +685% total sales, +162% organic traffic, +40% returning customers, and a +47% conversion rate after a Shopify rebuild, SEO, and paid growth.'/>
            </>
            <motion.div 
                id='case-study-forever-curls'
                className='case-study'
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <p className='eyebrow'><Link to='/results'>Case studies</Link> / E-commerce</p>
                    <h1>Forever Curls by Leysa</h1>
                    <h2>An e-commerce hair care brand. Year one under management, compared to the year before.</h2>
                    <div className='image-wrap'>
                        <WorkspaceArt />
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
                    <div className='cta-row'>
                        <Link className='btn' to='/results'>All case studies</Link>
                    </div>
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
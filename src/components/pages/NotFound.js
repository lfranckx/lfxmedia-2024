import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import '../../styles/pages/NotFound.scss';

export default function NotFound (props) {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const { loading } = props;

    return (
        <>
            <Helmet >
                <title>Page Not Found | LFX Media - Web Development &amp; Digital Marketing Experts</title>
                <meta name='description' content="Oops! The page you’re looking for doesn’t exist. Explore LFX Media for top-notch web development, digital marketing, and SEO services tailored to grow your business."/>
                <meta name='keywords' content="Web Development, Digital Marketing Services, SEO Strategies, Marketing Agency, PPC Advertising, Google Ads, Facebook Advertising, Meta Advertising, Online Marketing Solutions" />
            </Helmet>

            <motion.main 
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id='notfound'

                className={loading ? '' : 'fade-in-screen'}
            >
                    <h1><span>404</span>Sorry, this page does not exist.</h1>
                    <p>Oops! The page you’re looking for doesn’t exist. Explore LFX Media for top-notch web development, digital marketing, and SEO services tailored to grow your business.</p>
                    <div className='wrap'>
                        <Link className="btn" to="/">Return Home</Link>
                    </div>
            </motion.main>
        </>
    )
}
import React, { useEffect } from 'react';
import '../../styles/pages/Subscribe.scss';
import WorkspaceArt from '../WorkspaceArt';
import SignUpForm from '../SignUpForm';
import { motion } from 'framer-motion';

export default function SubscribePage(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { loading } = props;

    return (
        <>
            <>
                <title>Newsletter | What's Working in Google Ads, SEO &amp; AI Search | LFX Media</title>
                <meta name='description' content='A short monthly note for business owners: what is working right now in Google Ads, local SEO and AI search, with real numbers from our client accounts. Free, cancel anytime.'/>
            </>
            <motion.div
                initial={{ opacity: 0 }}    
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                id='subscribe-page'
            >
                <header className={loading ? '' : 'fade-in-screen'}>
                    <div className='container'>
                        <div className='text-wrap'>
                            <h1>One email a month. What's actually working.</h1>
                            <p>
                                Short notes for business owners on Google Ads, local SEO and AI search — what we're seeing across client accounts, what changed, and what to do about it. Free, and you can cancel anytime.
                            </p>
                        </div>
                    </div>

                    <SignUpForm />

                    <div className='image-wrap'>
                        <WorkspaceArt />
                    </div>
                </header>
            </motion.div>
        </>
    )
}
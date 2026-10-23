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
                <title>Subscribe to LFX Media Insights | Tips, News &amp; Offers</title>
                <meta name='description' content='Join LFX Media’s newsletter for exclusive tips on web development, digital marketing, and freelancing success. Stay informed with updates and special offers tailored for you.'/>
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
                            <h1>Being a web developer is tough.</h1>
                            <p>
                                Running a business as a web developer is even harder.
                                I will be sending out tips on surviving the world of freelance by letting you know what works and how to get started.
                                It's free and you can cancel anytime.
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
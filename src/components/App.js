import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';

import Navbar from './Navbar';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Footer from './Footer';
import NotFound from './pages/NotFound';
import Results from './pages/Results';
import Subscribe from './pages/Subscribe';
import LoadingScreen from './LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8800);
  }, []);

  return (
    <>
      <Helmet>
        <title>LFX Media | Web Developer, Full-stack Engineer, &amp; SEO Manager</title>
        <meta name='description' content="LFX Media is your go-to team for digital excellence. With expertise in Medical, Construction, E-Commerce, and Beauty, we connect your business to its target audience"/>
        <meta name='keywords' content='Web Development, Digital Marketing Services, SEO Strategies, Marketing Agency, PPC Advertising, Google Ads, Facebook Advertising, Meta Advertising, Online Marketing Solutions' />
      </Helmet>
      <div className='app'>
        <Navbar />
        <LoadingScreen loading={loading} />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Homepage loading={loading}/>} />
            <Route path='/contact' element={<Contact loading={loading}/>} />
            <Route path="/results" element={<Results loading={loading}/>} />
            <Route path="/subscribe" element={<Subscribe loading={loading}/>} />
            <Route element={<NotFound loading={loading}/>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default App;

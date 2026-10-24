import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './Navbar';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Footer from './Footer';
import NotFound from './pages/NotFound';
import CaseStudies from './pages/CaseStudies';
import CaseStudyAIS from './pages/CaseStudyAIS';
import CaseStudyForeverCurls from './pages/CaseStudyForeverCurls';
import Team from './pages/Team';
import Subscribe from './pages/Subscribe';
import LoadingScreen from './LoadingScreen';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // CallRail swap.js runs once on first load; re-run it after client-side route changes
  // so phone numbers rendered on the new page are swapped too.
  useEffect(() => {
    const t = setTimeout(() => {
      try { window.CallTrk?.swap?.(); } catch (e) { /* CallRail not loaded */ }
    }, 300);
    return () => clearTimeout(t);
  }, [location.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8800);
  }, []);

  return (
    <>
      <div className='app'>
        <Navbar />
        <LoadingScreen loading={loading} />
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Homepage loading={loading}/>} />
            <Route path='/contact' element={<Contact loading={loading}/>} />
            <Route path="/results" element={<CaseStudies loading={loading}/>} />
            <Route path="/results/advanced-insulation-system" element={<CaseStudyAIS loading={loading}/>} />
            <Route path="/results/forever-curls" element={<CaseStudyForeverCurls loading={loading}/>} />
            <Route path="/team" element={<Team loading={loading}/>} />
            <Route path="/subscribe" element={<Subscribe loading={loading}/>} />
            <Route path="/meet-raquel" element={<Navigate to="/team#raquel" replace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy loading={loading} /> } />
            <Route path="/terms-and-conditions" element={<Terms loading={loading} />} />
            <Route path="*" element={<NotFound loading={loading}/>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default App;

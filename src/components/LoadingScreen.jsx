import React from 'react';
import '../styles/LoadingScreen.scss';
import Logo from './Logo';

export default function LoadingScreen({ loading }) {
  return (
    <div className={loading ? 'loading-screen active' : 'loading-screen hidden'} aria-hidden={!loading}>
      <div className={loading ? 'logo-wrap' : 'logo-wrap fade-out'}>
        <Logo variant="outline" title="Loading LFX Media" />
      </div>
    </div>
  );
}

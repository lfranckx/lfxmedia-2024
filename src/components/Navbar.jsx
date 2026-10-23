import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const LINKS = [
    { to: '/', label: 'Home' },
    { to: '/team', label: 'Team' },
    { to: '/results', label: 'Case Studies' },
    { to: '/subscribe', label: 'Newsletter' },
];

export default function Navbar(props) {
    const location = useLocation();
    const [active, setActive] = useState(false);
    const close = () => setActive(false);

    const isActive = (path) =>
        path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

    const cta = location.pathname === '/contact'
        ? { to: '/', label: 'Close' }
        : { to: '/contact', label: 'Say Hello' };

    return (
        <div id={props.id} className='nav'>
            <nav>
                <Link to="/" onClick={close} aria-label="LFX Media home">
                    <h1><Logo className="nav-logo" /></h1>
                </Link>

                <div className='wrap'>
                    {LINKS.map(l => (
                        <Link key={l.to} className={`navlink ${isActive(l.to) ? 'active' : ''}`} to={l.to}>{l.label}</Link>
                    ))}
                    <Link className="btn" to={cta.to}>{cta.label}</Link>
                    <ThemeToggle />
                </div>

                <div className='mobile-actions'>
                    <ThemeToggle />
                    <button
                        type="button"
                        className='toggler'
                        onClick={() => setActive(!active)}
                        aria-label={active ? 'Close menu' : 'Open menu'}
                        aria-expanded={active}
                        aria-controls="mobile-menu"
                    >
                        <div className={`hamburger ${active ? 'active' : ''}`}>
                            <div className='line'></div>
                        </div>
                    </button>
                </div>
            </nav>
            <div id='mobile-menu' className={active ? 'show' : 'hide'}>
                <nav className='navlinks'>
                    {LINKS.map(l => (
                        <Link key={l.to} className={`navlink ${isActive(l.to) ? 'active' : ''}`} to={l.to} onClick={close}>{l.label}</Link>
                    ))}
                    <Link className="btn" to={cta.to} onClick={close}>{cta.label}</Link>
                </nav>
            </div>
        </div>
    );
}

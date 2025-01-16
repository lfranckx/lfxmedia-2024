import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import green from '../images/green-logo.png';

export default function Navbar(props) {
    const location = useLocation();
    const [active, setActive] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <div id={props.id} className='nav'>
            <nav>
                <Link to="/" onClick={() => {setActive(false)}}>
                    <h1><img src={green} alt='lfx media logo'/></h1>
                </Link>

                <div className='wrap'>
                    <Link className={`navlink ${isActive('/') ? 'active' : ''}`} to="/">Lachlan</Link>
                    <Link className={`navlink ${isActive('/meet-raquel') ? 'active' : ''}`} to="/meet-raquel">Raquel</Link>
                    <Link className={`navlink ${isActive('/results') ? 'active' : ''}`} to="/results">Results</Link>
                    <Link className={`navlink ${isActive('/subscribe') ? 'active' : ''}`} to="/subscribe">Newsletter</Link>
                    {location.pathname === '/contact' ? <Link className="btn" to="/">Close</Link> : <Link className="btn" to="/contact">Say Hello</Link>}
                </div>

                <div className='toggler' onClick={() => {setActive(!active)}}>
                    <div className={`hamburger ${active ? 'active' : ''}`}>
                        <div className='line'></div>
                    </div>
                </div>
            </nav>
            <div id='mobile-menu' className={`${active ? 'show' : 'hide'}`}>
                <nav className='navlinks'>
                    <Link className={`navlink ${isActive('/') ? 'active' : ''}`} to="/">Lachlan</Link>
                    <Link className={`navlink ${isActive('/meet-raquel') ? 'active' : ''}`} to="/meet-raquel">Raquel</Link>
                    <Link className={`navlink ${isActive('/results') ? 'active' : ''}`} to="/results" onClick={() => {setActive(false)}}>Results</Link>
                    <Link className={`navlink ${isActive('/subscribe') ? 'active' : ''}`} to="/subscribe" onClick={() => {setActive(false)}}>Newsletter</Link>
                    {location.pathname === '/contact' 
                    ? <Link className="btn" to="/" onClick={() => {setActive(false)}}>Home</Link> 
                    : <Link className="btn" to="/contact" onClick={() => {setActive(false)}}>Say Hello</Link>}
                </nav>
            </div>
        </div>
    );
}
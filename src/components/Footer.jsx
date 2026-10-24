import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';
import Logo from './Logo';

export default function Footer() {
    return (
        <>
            <footer>
                <div className='logo-wrap'>
                    <Link to={'/'}>
                        <h1><Logo className='footer-logo' /></h1>
                    </Link>
                </div>
                
                <p id='quote'>The best preparation for tomorrow is doing your best today.</p>
                <p id='nap'>
                    <span>LFX Media · Eureka Springs, Arkansas</span>
                    <span><a href='tel:+14084992830'>(408) 499-2830</a></span>
                    <span><a href='mailto:lachlan@lfxmedia.io'>lachlan@lfxmedia.io</a></span>
                </p>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/lfxmedia/'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/company/lfx-media/'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/lfranckx'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:lachlan@lfxmedia.io'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                        <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                </ul>


                <ul>
                    <li>
                        <p className='small-text'><Link to={"/privacy-policy"}>Privacy Policy</Link></p>
                    </li>
                    <li>
                        <p className='small-text'><Link to={"/terms-and-conditions"}>Terms of Use</Link></p>
                    </li>
                </ul>
                <p id='copyright'>Copyright © {new Date().getFullYear()} LFX Media. All rights reserved.</p>
            </footer>
        </>
    );
}
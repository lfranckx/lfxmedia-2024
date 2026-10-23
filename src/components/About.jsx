import React from 'react';
import '../styles/About.scss';
import { Link } from 'react-router-dom';

export default function About () {
    return (
        <>
            <section id='about'>
                <div className='container'>
                    <h2>Welcome to LFX Media. Your Partner in Digital Excellence.</h2>
                    <p>Led by Lachlan Franckx, alongside Raquel Franckx and Zahid Ilahi, LFX Media is your go-to team for making your business resonate with your target audience online. Whether you sell to other businesses or directly to consumers, we have a proven track record in diverse fields such as Construction, Contractors, E-Commmerce, Health &amp; Beauty, Healthcare, Medical, Retail, and more. That's why we tailor our digital services to fit exactly what you need, ensuring your message hits home with your audience. We're all about getting you results that matter.</p>
                    <div className='btn-wrap'>
                        <Link className='btn btn-on-brand' to='/team'>Meet the team</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
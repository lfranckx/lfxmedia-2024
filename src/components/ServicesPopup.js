import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesPopup.scss';

export default function ServicesPopup(props) {
    const { designCardOpen, developmentCardOpen, seoCardOpen, toggleDesignCard, toggleDevelopmentCard, toggleSeoCard } = props;

    return (
        <section id={'services-popup'}>
            <div className='content-wrap'>
                <div className={designCardOpen ? 'content' : 'hide'}>
                    <div className='wrap'>
                        <h2>Web Design &mdash; Creating the look &amp; feel of your website</h2>
                        <p>We value simple content structure, clean design patterns, and thoughtful interactions. Our goal is to ensure that your audience has a positive and enjoyable experience when using your website. Whether they’re reading content, browsing products, or watching videos, we make sure every interaction is clear and intuitive.</p>
                    </div>
                    <div className='wrap'>
                        <h3>Things we enjoy designing:</h3>
                        <p>UX, UI, Web, Mobile, Apps</p>
                    </div>
                    <div className='wrap'>
                        <h3>Design Tools:</h3>
                        <p>Figma</p>
                        <p>Photoshop</p>
                        <p>Canva</p>
                        <p>Pen &amp; Paper</p>
                    </div>
                    <button 
                        className='btn'
                        onClick={() => {toggleDesignCard(!designCardOpen)}}
                    >
                        Close
                    </button>
                </div>

                <div className={developmentCardOpen ? 'content' : 'hide'}>
                    <div className='wrap'>
                        <h2>Web Development</h2>
                        <p>We love coding things from scratch, bringing ideas to life in the browser. Specializing in full-stack web applications, we provide custom theme development for platforms like Shopify to meet your business’s specific needs. Our combined expertise covers web development that integrates seamlessly with eCommerce platforms, enhancing your store’s capabilities.</p>
                    </div>
                    <div className='wrap'>
                        <h3>Languages we speak:</h3>
                        <p>JavaScript, HTML, CSS, Java</p>
                    </div>
                    <div className='wrap'>
                        <h3>Frameworks &amp; Technologies</h3>
                        <ul>
                            <li>React.js</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>PostgreSQL</li>
                            <li>AWS-S3</li>
                            <li>Liquid</li>
                            <li>SASS/SCSS</li>
                            <li>Bootstrap</li>
                            <li>jQuery</li>
                            <li>RESTful APIs</li>
                            <li>AJAX</li>
                            <li>Git/Github</li>
                            <li>Squarespace</li>
                            <li>Shopify</li>
                            <li>Terminal</li>
                        </ul>
                    </div>
                    <button 
                        className='btn'
                        onClick={() => {toggleDevelopmentCard(!developmentCardOpen)}}
                    >
                        Close
                    </button>
                </div>

                <div className={seoCardOpen ? 'content' : 'hide'}>
                    <div className='wrap'>
                        <h2>Search Engine Optimization</h2>
                        <p>Want your company to stay at the top of Google’s search results? We optimize all aspects of your website – from keywords and meta tags to images and videos – so search engines can understand your content better. Using tools like Google Analytics, we analyze your website traffic, monitor visitor keywords, and track where they’re coming from. With these insights, we continuously fine-tune SEO to enhance visitor flow and keep your business competitive.</p>
                    </div>
                    <div className='wrap'>
                        <h3>Why you need SEO:</h3>
                        <p>Increased traffic to your business</p>
                        <p>Save money on your marketing budget</p>
                        <p>Stay above local competitors</p>
                        <p>Improved user experience</p>
                    </div>
                    <div className='wrap'>
                        <h3>Want to see the numbers?</h3>
                    </div>
                    <div className='btn-wrap'>
                        <Link className='btn-secondary' to='/results'>View our results <i className="fas fa-chevron-circle-right"></i></Link>
                    </div>
                    <button 
                        className='btn'
                        onClick={() => {toggleSeoCard(!seoCardOpen)}}
                    >
                        Close
                    </button>
                </div>
            </div>
        </section>
    )
}
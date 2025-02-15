import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesPopup.scss';

export default function ServicesPopup(props) {
    const { 
        designCardOpen, 
        developmentCardOpen, 
        seoCardOpen, 
        toggleDesignCard, 
        toggleDevelopmentCard, 
        toggleSeoCard,

        copywritingCardOpen, 
        socialMediaCardOpen, 
        printDesignCardOpen, 
        toggleCopywritingCard,
        toggleSocialMediaCard,
        togglePrintDesignCard
    } = props;

    return (
        <section id={'services-popup'}>
            <div className='content-wrap'>
                <ul className='services-list'>
                    <li className='services-list-item'>
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
                                <p>Adobe</p>
                                <p>Figma</p>
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
                    </li>
                    <li className='services-list-item'>
                        <div className={developmentCardOpen ? 'content' : 'hide'}>
                            <div className='wrap'>
                                <h2>Web Development</h2>
                                <p>We love coding things from scratch, bringing ideas to life in the browser. Specializing in full-stack web applications, we provide custom theme development for platforms like Shopify to meet your business’s specific needs. Our combined expertise covers web development that integrates seamlessly with eCommerce platforms, enhancing your store’s capabilities.</p>
                            </div>
                            <div className='wrap'>
                                <h3>Languages we speak:</h3>
                                <p>JavaScript, HTML, CSS, PHP, PSQL, Java</p>
                            </div>
                            <div className='wrap'>
                                <h3>Frameworks &amp; Technologies</h3>
                                <ul>
                                    <li>Shopify</li>
                                    <li>WordPress</li>
                                    <li>Wix</li>
                                    <li>React.js</li>
                                    <li>Express.js</li>
                                    <li>Node.js</li>
                                    <li>PostgreSQL</li>
                                    <li>AWS-S3</li>
                                    <li>Liquid</li>
                                    <li>PHP</li>
                                    <li>SASS/SCSS</li>
                                    <li>Bootstrap</li>
                                    <li>jQuery</li>
                                    <li>RESTful APIs</li>
                                    <li>AJAX</li>
                                    <li>Git/Github</li>
                                    <li>Squarespace</li>
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
                    </li>
                    <li className='services-list-item'>
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
                    </li>

                    <li className='services-list-item'>
                        <div className={copywritingCardOpen ? 'content' : 'hide'}>
                            <div className='wrap'>
                                <h2>Copywriting – Capturing Your Brand’s Voice</h2>
                                <p>We craft words that resonate. Whether it's engaging blogs, persuasive web copy, or captivating product descriptions, our copywriting connects with your audience and inspires action. With a focus on SEO, we ensure your content not only speaks to your readers but also ranks higher in search results.</p>
                            </div>
                            <div className='wrap'>
                                <h3>Copywriting services include:</h3>
                                <ul>
                                    <li>SEO-driven blog posts</li>
                                    <li>Website content</li>
                                    <li>Email &amp; SMS marketing copy</li>
                                    <li>Ad campaigns</li>
                                    <li>Product descriptions</li>
                                </ul>
                            </div>
                            <div className='wrap'>
                                <h3>Tools we use:</h3>
                                <ul>
                                    <li>Google Keyword Planner</li>
                                    <li>Ubersuggest</li>
                                    <li>Hemingway Editor</li>
                                </ul>
                            </div>
                            <button 
                                className='btn'
                                onClick={() => {toggleCopywritingCard(!copywritingCardOpen)}}
                            >
                                Close
                            </button>
                        </div>
                    </li>
                    <li className='services-list-item'>
                        <div className={socialMediaCardOpen ? 'content' : 'hide'}>
                            <div className='wrap'>
                                <h2>Social Media Strategy – Building Your Online Presence</h2>
                                <p>We develop strategies that align with your goals, connect with the right audience, and represent your brand authentically. From content calendars to creative campaigns, we create impactful social media plans and content that engage and grow your following.</p>
                            </div>
                            <div className='wrap'>
                                <h3>What we offer:</h3>
                                <ul>
                                    <li>Social media content creation</li>
                                    <li>Target audience research and engagement</li>
                                    <li>Campaign planning and execution</li>
                                    <li>Analytics and performance tracking</li>
                                </ul>
                            </div>
                            <div className='wrap'>
                                <h3>Platforms we work with:</h3>
                                <ul>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                    <li>LinkedIn</li>
                                    <li>TikTok</li>
                                    <li>Pinterest</li>
                                    <li>X</li>
                                </ul>
                            </div>
                            <div className='wrap'>
                                <h3>Content creation tools</h3>
                                <ul>
                                    <li>Canva</li>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                </ul>
                            </div>
                            <button 
                                className='btn'
                                onClick={() => {toggleSocialMediaCard(!socialMediaCardOpen)}}
                            >
                                Close
                            </button>
                        </div>
                    </li>
                    <li className='services-list-item'>
                        <div className={printDesignCardOpen ? 'content' : 'hide'}>
                            <div className='wrap'>
                                <h2>Digital &amp; Print Design – Bringing Your Brand to Life</h2>
                                <p>From print to pixels, we create visually stunning designs that leave a lasting impression. Whether it’s a restaurant menu, a flyer, or a digital graphic, we ensure every design aligns with your brand’s identity and resonates with your audience.</p>
                            </div>
                            <div className='wrap'>
                                <h3>Things we love designing:</h3>
                                <ul>
                                    <li>Flyers and brochures</li>
                                    <li>Restaurant menus</li>
                                    <li>Social media &amp; blog graphics</li>
                                    <li>Website design</li>
                                    <li>Marketing materials</li>
                                </ul>
                            </div>
                            <div className='wrap'>
                                <h3>Design tools:</h3>
                                <ul>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>Canva</li>
                                    <li>Figma</li>
                                    <li>InDesign</li>
                                    <li>Pen &amp; Paper</li>
                                </ul>
                            </div>
                            <button 
                                className='btn'
                                onClick={() => {togglePrintDesignCard(!printDesignCardOpen)}}
                            >
                                Close
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
// import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.scss';

import leysa from '../images/leysa.png';
import sah from '../images/SAH.png';
import ouidad from '../images/ouidad.png';
import the from '../images/THE.png';
// import omg from '../images/omg.png';
import michelle from '../images/Michelle-text.png';
import sonna from '../images/SB-LOGO-WHITE.png';
import johnny from '../images/johnny-ramirez.png';
import ollin from '../images/ollin_cream_500.png';
import hairboss from '../images/hairboss_black.webp';
// import ais from '../images/ais-logo-center-aligned-2.png';
import aart from '../images/adventure-art-logo.webp';
import pp from '../images/PP_White_Logo.webp';
// import spp from '../images/logo-large.png';
import yuki from '../images/yuki-logo.png';
import be from '../images/BE-white.png';
// import bp from '../images/logo-teal-bg.png';
import koa from '../images/brands-koa-journey-logo.png';
import greenhills from '../images/greenhills-logo.webp';
// import rdfranckx from '../images/rdf-logo-nobg.png';
import maria from '../images/mha-full-white-logo.png';
import crossing from '../images/crossingwellness-logo.png';
import lfi from '../images/lfi-conference.png';

export default function Projects() {
    return (
        <>
            <section className='projects'>
                <h2>Diverse Expertise</h2>
                <p>Explore our portfolio of transformative projects for various businesses of all kinds, designed to elevate and empower.</p>
                <p className='h3'>Want to see more? <span><a className='email' href='mailto:lachlan@lfxmedia.io'>Email us.</a></span></p>
                <div className='btn-wrap'>
                    <Link className='btn-secondary' to={'/results'}>View our results <i className="fas fa-chevron-circle-right"></i></Link>
                </div>
                <ul>
                    <li className='card pilgrim'>
                        <div className='image-wrap'>
                            <img src={pp} alt='Pilgrim Place Claremont' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Pilgrim Place is a continuing-care retirement community in Claremont, California. We developed a targeted paid advertising strategy, integrating Salesforce and web form automation to drive qualified senior-living leads for this Claremont-based CCRC.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a href='https://pilgrimplace.org/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'
                                    >
                                    View Website &#8594;
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className='card aart'>
                        <div className='image-wrap'>
                            <img src={aart} alt='Adventure Art, Eureka Springs' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Adventure Art is an art supply shop and studio in Eureka Springs. We enhanced their Square/Weebly online inventory to feature in-house paints and class tickets, transforming tourist interest into repeat online sales and consistently sold-out workshops.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a href='https://www.arkansasadventureart.com'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'
                                    >
                                    View Website &#8594;
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className='card koa'>
                        <div className='image-wrap'>
                            <img src={koa} alt='Slidell KOA Journey' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Slidell KOA Journey is a family-friendly campground in Louisiana. We manage Google Ads and Meta Ads campaigns, develop creative strategies, and handle ongoing performance optimization to increase bookings year-round.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://koa.com/campgrounds/slidell/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>

                    <li className='card yuki'>
                        <div className='image-wrap'>
                            <img src={yuki} alt='Yuki Sushi' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Since 1987, Yuki Sushi has been a local favorite in Willow Glen and Santa Clara. We revitalized their digital presence with a new website design, optimized menu navigation, and local SEO improvements to strengthen their brand and attract more dine-in and takeout customers.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://yukisushi.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    
                    <li className='card be'>
                        <div className='image-wrap'>
                            <img src={be} alt='Beyond Energy' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Beyond Energy is an all-natural energy drink with ginseng, antioxidants, and Mucuna pruriens for a natural dopamine boost. We built their WooCommerce website and crafted a bold brand identity to position them as a premium, health-conscious choice.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://gobeyondenergy.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    
                    <li className='card crossing'>
                        <div className='image-wrap'>
                            <img src={crossing} alt='Crossing Wellness' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Crossing Wellness is a therapy and psychology practice focused on helping individuals discover their best selves. We designed a warm Squarespace website and implemented on-page SEO to strengthen their local presence and increase client bookings.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.crossingwellness.org/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    
                    <li className='card maria'>
                        <div className='image-wrap'>
                            <img src={maria} alt="Maria's Healing Arts, Eureka Springs" />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Maria’s Healing Arts is a wellness and movement studio offering yoga, Pilates, and energy healing. We designed and built a modern WordPress website focused on clear service presentation, branding, and user experience.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.mariashealingarts.com'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    
                    <li className='card lfi'>
                        <div className='image-wrap'>
                            <img src={lfi} alt='Learning From Incidents' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Learning from Incidents in Software is a community challenging conventional views and reshaping how the software industry thinks about incidents, software reliability, and the critical role people play in keeping their systems running.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.learningfromincidents.io/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>

                    <li className='card greenhills'>
                        <div className='image-wrap'>
                            <img src={greenhills} alt='Green Hills Golf Course' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Green Hills Golf Course has been a cornerstone of the Sandusky County golf community since it first opened in 1958. We developed a custom full-stack Node.js and React.js web app for ticket printing, reporting, and daily operations.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://greenhillsgolf.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>

                    {/* <li className='card ais'>
                        <div className='image-wrap'>
                            <img src={ais} alt='Advanced Insulation System' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Advanced Insulation System is a custom insulation and energy solutions company specializing in residential &amp; commericial spaces. We have helped them earn over 2 million in sales in their first 6 months of being open!</p>
                            </div>
                            <div className='btn-wrap'>
                                <a href='https://advancedinsulationsystemsd.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'
                                    >
                                    View Website &#8594;
                                </a>
                            </div>
                        </div>
                    </li> */}
                    
                    {/* <li className='card rdf'>
                        <div className='image-wrap'>
                            <img src={rdfranckx} alt='Raquel Debbie Franckx' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>RD Franckx is a contemporary artist working with multi-media. She is based out of the Ozarks. Bold colors &amp; creative upcycling of magazines characterizes her art.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://rdfranckx.lfxmedia.net'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li> */}

                    {/* <li className='card bp'>
                        <div className='image-wrap'>
                            <img src={bp} alt='The Build Pros' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>The Build Pros are redefining the standard for excellence in the general contracting industry. They are a full-service provider dedicated to transforming spaces from design to build.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://thebuildprosd.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li> */}

                    {/* <li className='card spp'>
                        <div className='image-wrap'>
                            <img src={spp} alt='Sosa Practice Partners' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Sosa Practice Partners is a full service medical billing, EHR software, and Practice Management company. Their team has nearly 30 years of experience in the field and have built a solid reputation for business integrity.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.sosapartners.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li> */}
                </ul>
            </section>

            <section className='projects'>
                <h2>Spotlight on Style</h2>
                <p>Discover our latest projects in the beauty and hairstyling industry, where creativity meets cutting-edge digital presence.</p> 
                <p className='h3'>Want to see more? <span><a className='email' href='mailto:lachlan@lfxmedia.io'>Email us.</a></span></p>
                <div className='btn-wrap'>
                    <Link className='btn-secondary' to={'/results'}>View our results <i className="fas fa-chevron-circle-right"></i></Link>
                </div>
                <ul>
                    <li className='card sonna'>
                        <div className='image-wrap'>
                            <img src={sonna} alt='Sonna Brado Serious Beauty Pro' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Sonna Brado is a renowned hairdresser and founder of Serious Beauty Pro. We manage her Shopify site, launch campaigns for Angel Blades, and handle ongoing SEO, social media, and email marketing to grow education and tool sales.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://sonnabrado.com'
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    
                    <li className='card ouidad'>
                        <div className='image-wrap'>
                            <img src={ouidad} alt='Ouidad' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Ouidad Education trains stylists to master curly hair. We built their education site on Shopify and a custom certification system that displays verified credentials upon course completion.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://ouidadeducation.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    <li className='card leysa'>
                        <div className='image-wrap'>
                            <img src={leysa} alt='Leysa' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Leysa Carrillo is a nationally recognized educator and founder of Forever Curls Academy. We built a modern course site on Shopify, optimized conversions, and run SEO/PPC to expand global enrollments.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a href='https://forevercurlsbyleysa.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'
                                    >
                                    View Website &#8594;
                                </a>
                            </div>
                        </div>
                    </li>
                    
                    <li className='card sah'>
                        <div className='image-wrap'>
                            <img src={sah} alt='Social Arthouse' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Social Art House is a pro-beauty management and creative agency. We developed their React website and have been a long-term partner, collaborating on multiple projects and providing ongoing digital strategy and support.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.socialarthouse.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    <li className='card ollin'>
                        <div className='image-wrap'>
                            <img src={ollin} alt='Ollin Salon' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Ollin Salon is Johnny Ramirez’s creative studio in Los Angeles, New York, and Miami. We designed and developed a minimal yet sleek React.js website with online booking to attract new clients and reflect the brand’s focus on self-care.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://ollinsalon.com'
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    <li className='card johnny'>
                        <div className='image-wrap'>
                            <img src={johnny} alt='Johnny Ramirez California' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Johnny Ramirez is a Beverly Hills celebrity colorist known for his signature sun-kissed technique. We maintain and update his WordPress site and Shopify education store to keep them fast, modern, and on brand.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://johnnyramirez.com/'
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    <li className='card the'>
                        <div className='image-wrap'>
                            <img src={the} alt='Textured Hair Elevated' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>T.H.E. Awards is a national competition celebrating multicultural hair artistry. We delivered a high-impact event site on Wix, simplified entry flows, and supported paid media to grow submissions.</p>
                            </div>
                            
                            <div className='btn-wrap'>
                                <a  href='https://texturedhairelevated.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className='card michelle'>
                        <div className='image-wrap'>
                            <img src={michelle} alt='Michelle O Connor' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Michelle O’Connor is a five-time NAHA winner, educator, and Matrix Global Artistic Director. We produced a clean, high-performance site on React.js with structured content and on-page SEO to support press and bookings.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.michelleoconnorbeauty.com/'
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    <li className='card hairboss'>
                        <div className='image-wrap'>
                            <img src={hairboss} alt='HAIRBOSS by Jamie Wiley' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Jamie Wiley is an acclaimed stylist, educator, and author. We modernized her web presence with a new Shopify website, improved content structure, and connected analytics to track course and product engagement.</p>    
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.jamiewiley.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                        View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                </ul>
            </section>
        </>
    )
}
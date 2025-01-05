import React from 'react';
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
import ais from '../images/ais-logo-center-aligned.png';
import spp from '../images/logo-large.png';
import yuki from '../images/yuki-logo.png';
import be from '../images/BE-white.png';
import bp from '../images/logo-teal-bg.png';
import greenhills from '../images/greenhills-logo.webp';
import rdfranckx from '../images/rdf-logo-nobg.png';
import crossing from '../images/crossingwellness-logo.png';
import lfi from '../images/lfi-conference.png';

export default function Projects() {
    return (
        <>
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
                                <p>Sonna Brado is reknown hairdresser and is the founder and creator of Serious Beauty Pro where she provides educational products and her own line of hand-crafted shears, Angel Blades.</p>
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
                                <p>Ouidad believes that curly hair is a gift to be embraced and celebrated. They are dedicated to empowering every curly-haired individual to understand and love their fabulous hair!</p>
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
                                <p>Leysa Carrillo is a nationally recognized industry leader for her hair color transformations on textured hair. She is the founder of Forever Curls Academy where she provides education for hair stylists around the world.</p>
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
                                <p>Social Art House is a pro-beauty management and creative agency, offering an expansive consulting experience for brands through ingenuity, originality and imagination.</p>
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
                                <p>Ollin salon is a creative space with the primary goal to help you embrace who you are and help you align with your inner potential. Ollin's story is a way of being and self-care that should be a way of life.</p>
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
                                <p>Johnny Ramirez is a celebrity colorist working in Beverly Hills since 2002. Ramirez has been recognized by some of the top national magazines such as Vogue and InStyle on his natural, sun-kissed hair color technique.</p>
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
                                <p>T.H.E. Awards is one of the newest inaugural hair competitions that celebrates the dynamic range of artistry of the industry's most brilliant, multicultural professional and student "texperts" across the country.</p>
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
                                <p>Michelle O'Connor is a five-time NAHA-winning hairstylist, trailblazer, influencer, educator, Matrix global artistic director, and an emerging voice on diversity and inclusion within the beauty industry.</p>
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
                                <p>Jamie Wiley is an acclaimed industry stylist, educator, and internationally published author. Jamie is nationally recognized as the “Next Generation Top Influencer'' by American Salon Magazine.</p>    
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

            <section className='projects'>
                <h2>Diverse Expertise</h2>
                <p>Explore our portfolio of transformative projects for various businesses of all kinds, designed to elevate and empower.</p>
                <p className='h3'>Want to see more? <span><a className='email' href='mailto:lachlan@lfxmedia.io'>Email us.</a></span></p>
                <div className='btn-wrap'>
                    <Link className='btn-secondary' to={'/results'}>View our results <i className="fas fa-chevron-circle-right"></i></Link>
                </div>
                <ul>
                    <li className='card ais'>
                        <div className='image-wrap'>
                            <img src={ais} alt='Advanced Insulation System' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Advanced Insulation System is a custom insulation and energy solutions company specializing in residential &amp; commericial spaces. We have helped them earn over 2 million in sales in their first 6 months of being open!</p>
                            </div>
                            <div className='btn-wrap'>
                                <a href='https://advancedinsulationsystem.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'
                                    >
                                    View Website &#8594;
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className='card spp'>
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
                    </li>
                    <li className='card yuki'>
                        <div className='image-wrap'>
                            <img src={yuki} alt='Yuki Sushi' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Since 1987, Yuki Sushi has been a culinary haven and local staple of Willow Glen &amp; Santa Clara, uniting the community with the art of Japanese cuisine.</p>
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
                                <p>Beyond Energy is an energy drink like no other. Their formula is infused with all natural ingredients like ginseng &amp; antioxidants, but the thing that makes it truly special is the naturally occuring dopamine sourced from mucina pruriens.</p>
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
                    <li className='card bp'>
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
                    </li>
                    <li className='card greenhills'>
                        <div className='image-wrap'>
                            <img src={greenhills} alt='Green Hills Golf Course' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Green Hills Golf Course has been a cornerstone of the Sandusky County golf community since it first opened in 1958. This 18-hole Public Golf Course is located in Northern Ohio and features a traditional American design.</p>
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
                    <li className='card rdf'>
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
                    </li>
                    <li className='card crossing'>
                        <div className='image-wrap'>
                            <img src={crossing} alt='Crossing Wellness' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Crossing Wellness is a therapy &amp; psychology company focused on bringing everyone the joy of experiencing their best selves. They believe the best self isn't a destination, it's a journey that they are here to help guide you on.</p>
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
                </ul>
            </section>
        </>
    )
}
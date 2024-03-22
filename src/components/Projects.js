import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.scss';

import leysa from '../images/leysa.png';
import sah from '../images/SAH.png';
import ouidad from '../images/ouidad.png';
import the from '../images/THE.png';
import omg from '../images/omg.png';
import michelle from '../images/Michelle-text.png';
import sonna from '../images/SB-LOGO-WHITE.png';
import johnny from '../images/johnny-ramirez.png';
import ollin from '../images/ollin_cream_500.png';

export default function Projects() {
    return (
        <>
            <section id='projects'>
                <h2>Featured Work</h2>
                <p className='h3'>Here are a few professional projects I have recently built. Want to see more? <span><a className='email' href='mailto:lachlan@lfxmedia.io'>Email me.</a></span></p>
                <div className='btn-wrap'>
                    <Link className='btn-secondary' to={'/results'}>View my results <i className="fas fa-chevron-circle-right"></i></Link>
                </div>
                <ul>
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
                                <p>A pro-beauty management and creative agency, offering an expansive consulting experience for brands through ingenuity, originality and imagination.</p>
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
                    <li className='card ollin'>
                        <div className='image-wrap'>
                            <img src={ollin} alt='Ollin Salon' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Ollin salon is a creative space with the primary goal to help you embrace who you are and help you align with your inner potential. Ollin's story is a way of being and self-care that should be a way of life.</p>
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
                    <li className='card omg'>
                        <div className='image-wrap'>
                            <img src={omg} alt='OMG Artistry' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Published Celebrity Hair and Makeup Artist for Paris Hilton, Nick Jonas, Britney Spears NYFW Show, Joico Brand Storyteller, Key Note Speaker for Modern Salon, Top 100 Influencers on Modern Salon, and more.</p>    
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.omgartistry.com/'
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
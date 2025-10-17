import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import './footer.css'
import React, { forwardRef } from "react";

const Footer = ({ref , bottoms}) => {

    
  const scrollToFooter = () => {
    if (bottoms.current) {
      bottoms.current.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <section  ref= {ref} className='parents_footer'>
            <div className='footer_page'>
                <nav className='footer_links'>
                    <div>
                        <h1 >Frontend Mentor</h1>
                    </div>
                    <ul className='unorder_list'>
                        <li><FaFacebook /></li>
                        <li><FaXTwitter /></li>
                        <li><FaInstagram /></li>
                        <li><FaLinkedin /></li>
                    </ul>
                </nav>

                <section className='section_4'>

                    <div className='bar_section'>
                        <h2>Stay up to date</h2>
                        <p>with new challenges, featured solutions, selected articles, and our latest news</p>

                        <div className='search_section'>
                            <input type="text" />
                            <button className=''>SUBSCRIBE</button>
                        </div>
                    </div>

                    <section className='second_section'>

                        <div className='third_div'>
                            <h3>Frontend Mentor</h3>
                            <ul>
                                <li>Unlock Pro</li>
                                <li>Use cases</li>
                                <li>Contact us</li>
                                <li>Become a partner</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Explore</h3>

                            <ul>
                                <li>Learning paths</li>
                                <li>Challenges</li>
                                <li>Solutions</li>
                                <li>Articles</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Community</h3>
                            <ul>
                                <li>Discord</li>
                                <li>Guidelines</li>
                                <li onClick={scrollToFooter} style={{ cursor: "pointer" }}>Home</li>

                            </ul>
                        </div>

                        <div>
                            <h3>Contact Us</h3>

                            <ul>
                                <li><span>Email-</span>robin81@gmail.com</li>
                                <li><span>Mobile No-</span>9746464684</li>

                            </ul>

                        </div>
                    </section>

                </section>

            </div>

            <div className='last_name' >
                <h3>© Frontend Mentor 2019 - 2025</h3>
                <div className='list_of'>
                    <li>Terms</li>
                    <li>Cookie Policy</li>
                    <li>Privacy policy</li>
                    <li>License</li>
                </div>
            </div>
        </section>
    )
}

export default Footer;
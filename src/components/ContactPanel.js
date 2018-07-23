import React from 'react';
import FontAwesome from 'react-fontawesome';
import SocialGithub from './SocialGithub';

const ContactPanel = () => {
    return(
        <div id="Contact" className="ContactPanel panel">
        <div className="overlay"></div>
            <div className="container">
                <div className="intro">
                    <div>
                        <h2>Contact</h2>
                        <p>I am always looking for more work or collaborations, and can always be contacted directly through this contact form!</p>
                        <p>If you prefer E-Mail, I can also be contacted directly through <a href="mailto:contact@sgcoding.media" className="contact-mail">contact@sgcoding.media</a></p>
                    </div>
                </div>
                <div className="form">
                    <form>
                        <div>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message"></textarea>
                        </div>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
                <div className="social-icons">
                    <div>
                        <SocialGithub />
                        <a className="social-link" href="https://www.linkedin.com/in/soreg/" target="_blank"rel="noopener noreferrer">
                        <FontAwesome 
                            className="social-icon"
                            name="linkedin" 
                        />
                        </a>
                        <a className="social-link" href="https://twitter.com/SorenWebDev" target="_blank" rel="noopener noreferrer">
                        <FontAwesome 
                            className="social-icon"
                            name="twitter" 
                        />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPanel;
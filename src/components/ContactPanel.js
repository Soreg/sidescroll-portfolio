import React from 'react';
import FontAwesome from 'react-fontawesome';
import SocialGithub from './SocialGithub';
import SocialLinkedin from './SocialLinkedin';
import SocialTwitter from './SocialTwitter';

const ContactPanel = () => {
    return(
        <div id="Contact" className="ContactPanel panel">
        <div className="overlay"></div>
            <div className="container">
                <div className="intro">
                    <div>
                        <h2>Contact</h2>
                        <div className="intro-text">
                            <p>I can always be contacted through the contact form if you wish to collaborate on a future project, or simply want to have a casual chat.</p>
                            <p>If you prefer direct E-Mail, I can also be contacted directly through <a href="mailto:contact@sgcoding.media" className="contact-mail">contact@sgcoding.media</a></p>
                        </div>
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
                        <SocialLinkedin />
                        <SocialTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPanel;
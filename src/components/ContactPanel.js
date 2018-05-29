import React from 'react';

const ContactPanel = () => {
    return(
        <div className="ContactPanel panel">
            <div className="container">
                <div className="intro">
                    <div>
                        <h2>Contact</h2>
                        <p>I am always looking for more work or collaborations, and can always be contacted directly through this contact form!</p>
                    </div>
                </div>
                <div className="form">
                    <form>
                        <div>
                            <div>
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div>
                                <label for="email">E-mail</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                        </div>
                        <div>
                            <label for="message">Message</label>
                            <textarea id="message"></textarea>
                        </div>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPanel;
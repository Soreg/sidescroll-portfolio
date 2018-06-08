import React from 'react';

const Navigation = ({ handleNavigation }) => {
    return(
        <div className="Navigation">
            <nav>
                <ul>
                    <li>
                        <a href="#" data-panel="0" onClick={handleNavigation}>
                            <p>Welcome</p>
                            <div className="nav-point">
                                <div className="bullet"></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-panel="1" onClick={handleNavigation}>
                            <p>Portfolio</p>
                            <div className="nav-point">
                                <div className="bullet"></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-panel="2" onClick={handleNavigation}>
                            <p>Contact</p>
                            <div className="nav-point">
                                <div className="bullet"></div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="line"></div>
            </nav>
        </div>
    )   
}

export default Navigation;
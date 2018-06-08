import React from 'react';

const Navigation = () => {
    return(
        <div className="Navigation">
            <nav>
                <ul>
                    <li>
                        <a href="#" data-panel="1">
                            <p>Welcome</p>
                            <div className="nav-point"></div>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-panel="2">
                            <p>Portfolio</p>
                            <div className="nav-point"></div>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-panel="3">
                            <p>Contact</p>
                            <div className="nav-point"></div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )   
}

export default Navigation;
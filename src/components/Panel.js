import React from 'react';
import WelcomePanel from './WelcomePanel';
import PortfolioPanel from './PortfolioPanel';
import ContactPanel from './ContactPanel';

const Panel = ({ showcaseProjects, openPortfolio, moveLeft }) => {
    var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    let styles = {}

    if(browserWidth > 1700) {
        styles = {
            transform: `translateX(calc((100vw - 70vw) / 2 + ${moveLeft}px))`
        }
    } else if(browserWidth > 1280) {
        styles = {
            transform: `translateX(calc((100vw - 80vw) / 2 + ${moveLeft}px))`
        }
    } else {
        styles = {
            transform: `translateX( ${moveLeft}px)`
        }
    }
    
    return(
        <div className="panel-wrapper" style={styles}>
            <div>
                <WelcomePanel/>
                <PortfolioPanel showcaseProjects={showcaseProjects} openPortfolio={openPortfolio}/>
                <ContactPanel />
            </div>
        </div>
    );
}

export default Panel;
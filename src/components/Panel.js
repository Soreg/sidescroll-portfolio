import React from 'react';
import WelcomePanel from './WelcomePanel';
import PortfolioPanel from './PortfolioPanel';
import ContactPanel from './ContactPanel';

const Panel = ({ showcaseProjects, openPortfolio, moveLeft }) => {

    const styles = {
        transform: `translateX(${moveLeft}vw)`
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
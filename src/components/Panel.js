import React from 'react';
import WelcomePanel from './WelcomePanel';
import PortfolioPanel from './PortfolioPanel';

const Panel = ({ showcaseProjects, openPortfolio, moveLeft }) => {

    const styles = {
        transform: `translateX(${moveLeft}vw)`
    }
    
    return(
        <div className="panel-wrapper" style={styles}>
            <div>
                <WelcomePanel/>
                <PortfolioPanel showcaseProjects={showcaseProjects} openPortfolio={openPortfolio}/>
            </div>
        </div>
    );
}

export default Panel;
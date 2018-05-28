import React from 'react';
import WelcomePanel from './WelcomePanel';
import PortfolioPanel from './PortfolioPanel';

const Panel = ({ showcaseProjects, openPortfolio }) => {
    
    return(
        <div className="panel-wrapper">
            <div>
                <WelcomePanel/>
                <PortfolioPanel showcaseProjects={showcaseProjects} openPortfolio={openPortfolio}/>
            </div>
        </div>
    );
}

export default Panel;
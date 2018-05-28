import React from 'react';
import WelcomePanel from './WelcomePanel';
import PortfolioPanel from './PortfolioPanel';

const Panel = ({ showcaseProjects }) => {
    return(
        <div className="panel-wrapper">
            <div>
                <WelcomePanel/>
                <PortfolioPanel showcaseProjects={showcaseProjects}/>
            </div>
        </div>
    );
}

export default Panel;
import React from 'react';
import WelcomePanel from './WelcomePanel';
import PortfolioPanel from './PortfolioPanel';

const Panel = () => {
    return(
        <div className="panel-wrapper">
            <div>
                <WelcomePanel/>
                <PortfolioPanel/>
            </div>
        </div>
    );
}

export default Panel;
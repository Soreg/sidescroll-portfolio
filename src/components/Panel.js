import React from 'react';
import WelcomePanel from './WelcomePanel';
import PortfolioPanel from './PortfolioPanel';

const Panel = () => {
    return(
        <div className="panel-wrapper">
          <WelcomePanel/>
          <PortfolioPanel/>
        </div>
    );
}

export default Panel;
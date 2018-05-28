import React from 'react';

const PortfolioShowcase = ({ projects, closePortfolio }) => {
    console.log(closePortfolio);
    
    
    return(
        <div className="PortfolioShowcase">
            <div className="close-component" onClick={closePortfolio}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default PortfolioShowcase;
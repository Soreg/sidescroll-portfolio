import React from 'react';
import PortfolioProject from './PortfolioProject';

const PortfolioShowcase = ({ projects, closePortfolio }) => {
    const portfolioProjects = projects.map((project, i) => (
        <PortfolioProject project={project} key={i}/>
    ));
    
    
    return(
        <div className="PortfolioShowcase">
            <div className="close-component" onClick={closePortfolio}>
                <div></div>
                <div></div>
            </div>
            <div className="projects">
                { portfolioProjects }
            </div>
        </div>
    );
}

export default PortfolioShowcase;
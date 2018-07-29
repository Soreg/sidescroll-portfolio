import React from 'react';
import PortfolioProject from './PortfolioProject';

const PortfolioPanel = ({ showcaseProjects, openPortfolio }) => {

    const projects = showcaseProjects.map((project, i) => (
        <PortfolioProject project={project} key={i}/>
    ))

    return(
        <div id="Portfolio" className="PortfolioPanel panel">
        <div className="overlay"></div>
            <div className="container">
            <div className="projects-container flex-cell">
                { projects }
            </div>
                <div className="flex-cell portfolio-intro">
                    <div className="intro-container">
                    <h2>Portfolio</h2>
                    <div>
                        <p>I have made a few personal projects throughout my programming journey, which I have chosen to share on my portfolio.</p>
                        <p>Some of my projects, like the DevMOP extension, are made in collaboration with other passionate developers.</p>
                    </div>
                    <p className="link" onClick={openPortfolio}>View All Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPanel;
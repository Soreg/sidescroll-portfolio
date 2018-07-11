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
            { projects }
                <div className="flex-cell portfolio-intro">
                    <div className="intro-container">
                    <h2>Portfolio</h2>
                    <div>
                        <p>As a passionate web developer, I have made a bunch of personal projects.</p>
                        <p>Most projects are front-end based, but some also takes advantage of some API's, like the weather app.</p>
                        <p>A few of the project are also made during collaboration with other developers</p>
                    </div>
                    <a onClick={openPortfolio} href="#">View All Projects</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPanel;
import React from 'react';

const PortfolioProject = ({ project }) => {
    console.log(project);
    
    
    return(
        <div className="PortfolioProject flex-cell portfolio-showcase">
            <div className="img-container">
                <img src={project.image} alt="Portfolio project"/>
            </div>
            <div className="description">
                <h3>{project.name}</h3>
                <p dangerouslySetInnerHTML={{__html: project.description}} />
                <a href={project.link} target="_blank">To Project</a>
            </div>
        </div>
    );
}

export default PortfolioProject;
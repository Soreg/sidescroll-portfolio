import React from 'react';

const PortfolioProject = ({ project }) => {

    const style = {
        background: project.backgroundColor
    }
    
    return(
        <div className="PortfolioProject flex-cell portfolio-showcase" style={style}>
            <div className="img-container">
                <img src={project.image} alt="Portfolio project"/>
            </div>
            <div className="description">
                <h3>{project.name}</h3>
                <p dangerouslySetInnerHTML={{__html: project.description}} />
                <div className="link-container">
                    <a href={project.link} target="_blank">To Project</a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioProject;
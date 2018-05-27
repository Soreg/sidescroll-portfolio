import React from 'react';

import VoyageClone from '../img/showcase/Voyage_Clone.png'; 
import WeatherApp from '../img/showcase/weather-app.png';

const WelcomePanel = () => {
    return(
        <div className="PortfolioPanel panel">
            <div className="container">
                <div className="flex-cell portfolio-showcase">
                <div className="img-container">
                    <img src={VoyageClone}/>
                </div>
                    <div className="description">
                        <h3>Voyage Clone</h3>
                        <p>Voyage Clone is a clone of this website template, and it's the first in a non-going series of website clones</p>
                        <a href="https://www.google.com" target="_blank">To Project</a>
                    </div>
                </div>
                <div className="flex-cell portfolio-showcase reversed">
                    <div className="img-container">
                        <img src={WeatherApp}/>
                    </div>
                    <div className="description">
                        <h3>Weather App</h3>
                        <p>The ReactJS Weather app fetches today's weather from OpenWeatherMap</p>
                        <a href="https://www.google.com" target="_blank">To Project</a>
                    </div>
                </div>
                <div className="flex-cell portfolio-intro">
                    <div className="intro-container">
                    <h2>Portfolio</h2>
                    <div>
                        <p>As a passionate web developer, I have made a bunch of personal projects.</p>
                        <p>Most projects are front-end based, but some also takes advantage of some API's, like the weather app.</p>
                        <p>A few of the project are also made during collaboration with other developers</p>
                        <p>-- Add more text</p>
                    </div>
                    <a href="#">View All Projects</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePanel;
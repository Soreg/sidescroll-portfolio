import React, { Component } from 'react';
import './App.css';

import Panel from './components/Panel';

class App extends Component {
  state = {
    projects: [],
    displayProjects: undefined
  }

  componentWillMount() {
    this.setState({projects: [
      {
        name: 'Voyage Clone',
        languages: ['HTML /', ' CSS /', ' Javascript /', ' jQuery /', ' SCSS /', ' Git'],
        description: 'Voyage Clone is a clone of <a href="https://freebiesbug.com/psd-freebies/voyage-free-travel-template-psd/" target="_blank">this</a> website template, and it is the first in an on-going series of website clones.',
        link: 'http://sorendev-voyage-clone.surge.sh/',
        image: 'https://image.ibb.co/mH3svH/Voyage_Clone.png',
      },
      {
        name: 'ReactJS Weather App',
        languages: ['ReactJS / JavaScript / CSS / Git'],
        description: "The ReactJS Weather App fetches today's weather from OpenWeatherMap",
        link: 'http://sorendev-react-weather-app.herokuapp.com/',
        image: 'https://image.ibb.co/j2Z5cd/weather_app2.jpg'
      },
      {
        name: 'DevMOP Chrome Extension',
        languages: ['Html /', ' CSS /', ' Javascript /', ' jQuery /', ' Api /', ' JSON'],
        description: 'DevMOP is a Chrome Extension aimed towards developers. The main goal is to keep developers focused and motivated by giving them a set of tools. DevMop was made in collaboration with <a href="https://github.com/fatizhf" target="_blank"><span className="text-shoutout">Fatima</span></a> and <a href="https://github.com/mussol" target="_blank"><span classname="text-shoutout">Mussol</span></a>',
        link: 'https://chrome.google.com/webstore/detail/devmop/nbnbhmpifhipmfckccbhelhmbkccejbc',
        image: 'https://image.ibb.co/iHDXAw/dev_Mop_Screen.png',
      },
      {
        name: 'Visual Weather',
        languages: ['HTML /', ' CSS /', ' Javascript /', ' jQuery /', ' API /', ' JSON'],
        description: 'Visual Weather is an on-going personal project. It displays the local weather to a set of 4 animated "weather cards", based on the city you are searching for.',
        link: 'https://visual-weather.surge.sh/',
        image: 'https://image.ibb.co/dXb2Aw/Visual.png',
      },
      {
        name: 'Famous Quotes',
        languages: ['React /', ' CSS /', ' Javascript /', ' jQuery /', ' API /', ' JSON'],
        description: 'Famous Quotes is a small project made in collaboration with <a href="https://www.linkedin.com/in/alison-bearden-060938145/" target="_blank"><span className="text-shoutout">Alison</span></a>. It uses JSON to fetch a random quote from their library, split up in "Movie" and "Famous" categories.',
        link: 'http://famousquotes.surge.sh/',
        image: 'https://image.ibb.co/dcxsAw/Famous_Quotes.png',
      },
      {
        name: 'Outdoor Haderslev',
        languages: ['HTML /', ' CSS /', ' PHP'],
        description: 'Outdoor Haderslev is a danish site, and was an assignment given to me at a local bootcamp. Outdoor Haderslev uses a free Wordpress theme, which has been customized with Html and Css.',
        link: 'http://www.sgcoding.media/outdoor-haderslev/',
        image: 'https://image.ibb.co/bVX9qw/Outdoor_Haderslev.png',
      }
    ],
    displayProjects: false
  });
  }


  render() {
    const showcaseProjects = this.state.projects.slice(0, 2);
    
    return (
      <div className="App">
        <Panel showcaseProjects={showcaseProjects}/>
      </div>
    );
  }
}

export default App;

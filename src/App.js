import React, { Component } from 'react';
import './App.css';

import Panel from './components/Panel';
import PortfolioShowcase from './components/PortfolioShowcase';

class App extends Component {
  state = {
    projects: [],
    displayProjects: undefined,
    translateX: undefined,
    currentSlide: undefined,
    recentlyScrolled: undefined
  }

  componentWillMount() {
    this.setState({projects: [
      {
        name: 'Voyage Clone',
        languages: ['HTML /', ' CSS /', ' Javascript /', ' jQuery /', ' SCSS /', ' Git'],
        description: 'Voyage Clone is a clone of <a href="https://freebiesbug.com/psd-freebies/voyage-free-travel-template-psd/" target="_blank">this</a> website template, and it is the first in an on-going series of website clones.',
        link: 'http://sorendev-voyage-clone.surge.sh/',
        image: 'https://image.ibb.co/mH3svH/Voyage_Clone.png',
        backgroundColor: '#3f5973'
      },
      {
        name: 'ReactJS Weather App',
        languages: ['ReactJS / JavaScript / CSS / Git'],
        description: "The ReactJS Weather App fetches today's weather from OpenWeatherMap",
        link: 'http://sorendev-react-weather-app.herokuapp.com/',
        image: 'https://image.ibb.co/j2Z5cd/weather_app2.jpg',
        backgroundColor: '#c55220'
      },
      {
        name: 'Visual Weather',
        languages: ['HTML /', ' CSS /', ' Javascript /', ' jQuery /', ' API /', ' JSON'],
        description: 'Visual Weather is an on-going personal project. It displays the local weather to a set of 4 animated "weather cards", based on the city you are searching for.',
        link: 'https://visual-weather.surge.sh/',
        image: 'https://image.ibb.co/dXb2Aw/Visual.png',
        backgroundColor: '#7c7e9b'
      },
      {
        name: 'DevMOP Chrome Extension',
        languages: ['Html /', ' CSS /', ' Javascript /', ' jQuery /', ' Api /', ' JSON'],
        description: 'DevMOP is a Chrome Extension aimed towards developers. The main goal is to keep developers focused and motivated by giving them a set of tools. DevMop was made in collaboration with <a href="https://github.com/fatizhf" target="_blank"><span className="text-shoutout">Fatima</span></a> and <a href="https://github.com/mussol" target="_blank"><span classname="text-shoutout">Mussol</span></a>',
        link: 'https://chrome.google.com/webstore/detail/devmop/nbnbhmpifhipmfckccbhelhmbkccejbc',
        image: 'https://image.ibb.co/iHDXAw/dev_Mop_Screen.png',
        backgroundColor: '#52708e'
      },
      {
        name: 'Famous Quotes',
        languages: ['React /', ' CSS /', ' Javascript /', ' jQuery /', ' API /', ' JSON'],
        description: 'Famous Quotes is a small project made in collaboration with <a href="https://www.linkedin.com/in/alison-bearden-060938145/" target="_blank"><span className="text-shoutout">Alison</span></a>. It uses JSON to fetch a random quote from their library, split up in "Movie" and "Famous" categories.',
        link: 'http://famousquotes.surge.sh/',
        image: 'https://image.ibb.co/dcxsAw/Famous_Quotes.png',
        backgroundColor: '#206ca0'
      },
      {
        name: 'Outdoor Haderslev',
        languages: ['HTML /', ' CSS /', ' PHP'],
        description: 'Outdoor Haderslev is a danish site, and was an assignment given to me at a local bootcamp. Outdoor Haderslev uses a free Wordpress theme, which has been customized with Html and Css.',
        link: 'http://www.sgcoding.media/outdoor-haderslev/',
        image: 'https://image.ibb.co/bVX9qw/Outdoor_Haderslev.png',
        backgroundColor: '#85870c'
      }
    ],
    displayProjects: false,
    translateX: 0,
    currentSlide: 0,
    recentlyScrolled: false
  });
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('keydown', this.handleScroll);
  }

  openPortfolio = () => {
    this.setState({
      displayProjects: true
    })
  }

  closePortfolio = () => {
    this.setState({
      displayProjects: false
    })
  }

  handleScroll = (e) => {
    const panelAmount = document.querySelectorAll('.panel').length;
    const panelWidth = document.querySelector('.panel').offsetWidth;
    var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    const up = e.deltaY < 0 ? true : false
    const down = e.deltaY > 0 ? true : false
    const arrowDirection = e.key;

    if(!this.state.recentlyScrolled) {
      if(up || arrowDirection == "ArrowLeft") {
        if(this.state.currentSlide >= 1 && !this.state.displayProjects && browserWidth > 1150) {
          this.setState((prevState) => ({
            translateX: prevState.translateX + panelWidth,
            currentSlide: prevState.currentSlide - 1
          })); 
          var prevTarget = document.getElementsByClassName('overlay')[this.state.currentSlide + 1];
          prevTarget.style.opacity = ".3";
        }
      } else if(down || arrowDirection == "ArrowRight") {
        if(this.state.currentSlide < panelAmount-1 && !this.state.displayProjects  && browserWidth > 1150) {
          this.setState((prevState) => ({
            translateX: prevState.translateX - panelWidth,
            currentSlide: prevState.currentSlide + 1
          })); 
          var prevTarget = document.getElementsByClassName('overlay')[this.state.currentSlide - 1];
          prevTarget.style.opacity = ".3";
        }
      }
      this.setState({
        recentlyScrolled: true
      });
      setTimeout(() => {
        this.setState({recentlyScrolled: false});
      }, 800)
    }

    var target = document.getElementsByClassName('overlay')[this.state.currentSlide];
    target.style.opacity = "0";

  }

  render() {
    const showcaseProjects = this.state.projects.slice(0, 2);
    
    return (
      <div className="App">
        <Panel showcaseProjects={showcaseProjects} openPortfolio={this.openPortfolio} moveLeft={this.state.translateX}/>
        { this.state.displayProjects ? <PortfolioShowcase projects={this.state.projects} closePortfolio={this.closePortfolio}/> : null}
      </div>
    );
  }
}

export default App;

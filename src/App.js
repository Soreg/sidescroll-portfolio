import React, { Component } from 'react';
import './App.css';

import Panel from './components/Panel';
import PortfolioShowcase from './components/PortfolioShowcase';
import projects from './fixtures/projects';
import Navigation from './components/Navigation';

class App extends Component {
  state = {
    projects: [],
    displayProjects: undefined,
    translateX: undefined,
    currentSlide: undefined,
    recentlyScrolled: undefined
  }

  componentWillMount() {
    this.setState({
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
    const showcaseProjects = projects.slice(0, 2);
    
    return (
      <div className="App">
        <Panel showcaseProjects={showcaseProjects} openPortfolio={this.openPortfolio} moveLeft={this.state.translateX}/>
        { this.state.displayProjects ? <PortfolioShowcase projects={projects} closePortfolio={this.closePortfolio}/> : null}
        { !this.state.displayProjects ? <Navigation /> : null}
      </div>
    );
  }
}

export default App;

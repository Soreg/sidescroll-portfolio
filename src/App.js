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

  scrollMechanic = (scrollDirection, scrollAmount=1) => {
    const panelAmount = document.querySelectorAll('.panel').length;
    const panelWidth = document.querySelector('.panel').offsetWidth;
    var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if(!this.state.recentlyScrolled) {
      if(scrollDirection == "up") {
        if(this.state.currentSlide >= 1 && !this.state.displayProjects && browserWidth > 1150) {
          this.setState((prevState) => ({
            translateX: prevState.translateX + (panelWidth * scrollAmount),
            currentSlide: prevState.currentSlide - scrollAmount
          })); 
          // var prevTarget = document.getElementsByClassName('overlay')[this.state.currentSlide + 1];
          // prevTarget.style.opacity = ".3";
        }
      } else if(scrollDirection == "down") {
        if(this.state.currentSlide < panelAmount-1 && !this.state.displayProjects  && browserWidth > 1150) {
          this.setState((prevState) => ({
            translateX: prevState.translateX - (panelWidth * scrollAmount),
            currentSlide: prevState.currentSlide + scrollAmount
          })); 
          // var prevTarget = document.getElementsByClassName('overlay')[this.state.currentSlide - 1];
          // prevTarget.style.opacity = ".3";
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

  handleScroll = (e) => {
    let direction = "";
    if(direction = e.deltaY < 0 || e.key == "ArrowLeft") {
      direction = "up";
    } else if(direction = e.deltaY > 0 || e.key == "ArrowRight") {
      direction = "down";
    }
    this.scrollMechanic(direction);
  }

  handleNavigation = (e) => {
    e.preventDefault();
    const panelTo = e.currentTarget.attributes.getNamedItem('data-panel').value;
    const panelsToSlide = Math.abs(panelTo - this.state.currentSlide);

    let direction = "";

    if(panelTo - this.state.currentSlide < 0) {
      direction = "up";
    } else if(panelTo - this.state.currentSlide > 0) {
      direction = "down";
    }

    this.scrollMechanic(direction, panelsToSlide);
  }

  render() {
    const showcaseProjects = projects.slice(0, 2);
    
    return (
      <div className="App">
        <Panel showcaseProjects={showcaseProjects} openPortfolio={this.openPortfolio} moveLeft={this.state.translateX}/>
        { this.state.displayProjects ? <PortfolioShowcase projects={projects} closePortfolio={this.closePortfolio}/> : null}
        { !this.state.displayProjects ? <Navigation handleNavigation={this.handleNavigation}/> : null}
      </div>
    );
  }
}

export default App;

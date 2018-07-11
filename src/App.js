import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

import Panel from './components/Panel';
import PortfolioShowcase from './components/PortfolioShowcase';
import projects from './fixtures/projects';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helmetTitle: '',
      projects: [],
      displayProjects: false,
      translateX: 0,
      currentSlide: 0,
      recentlyScrolled: false,
      progressMove: 0
    }

    this.updateHelmet = this.updateHelmet.bind(this);
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener('keydown', this.handleScroll);
    this.updateHelmet();
  }

  updateHelmet = () => {
    var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(browserWidth > 1150) {
      const title = document.querySelector('.Navigation .active').dataset.title;
      this.setState({
        helmetTitle: title
      });
    }
    else {
      this.setState({
        helmetTitle: 'SorenDev'
      });
    }
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
    if(!this.state.displayProjects) {
    // Scroll mechanics
    const panelAmount = document.querySelectorAll('.panel').length;
    const panelWidth = document.querySelector('.panel').offsetWidth;
    var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // Navigation mechanics
    const menuCounter = document.querySelectorAll('.Navigation li').length;
    const barWidth = document.querySelector('.line').offsetWidth;
    const distanceBetween = barWidth / (menuCounter-1);

    // if delay is gone
    if(!this.state.recentlyScrolled) {
      
      if(scrollDirection === "up") {
        if(this.state.currentSlide >= 1 && !this.state.displayProjects && browserWidth > 1150) {
          this.setState((prevState) => ({
            currentSlide: prevState.currentSlide - scrollAmount,
            translateX: prevState.translateX + (panelWidth * scrollAmount),
            progressMove: prevState.progressMove - (distanceBetween * scrollAmount)
          }), () => {
            // Runs after states are changed
            const activeNav = document.querySelector('.active');
            activeNav.classList.remove('active');
            const currentNavItem = document.querySelectorAll('.Navigation a')[this.state.currentSlide];
            currentNavItem.classList.add('active');

            // Adjust opacity
            const prevOverlay = document.querySelectorAll('.overlay')[this.state.currentSlide + scrollAmount];
            const overlay = document.querySelectorAll('.overlay')[this.state.currentSlide];
            prevOverlay.style.opacity = ".3";
            overlay.style.opacity = "0";
            this.updateHelmet();

          }); 
        }
      } else if(scrollDirection === "down") {
        if(this.state.currentSlide < panelAmount-1 && !this.state.displayProjects  && browserWidth > 1150) {
          this.setState((prevState) => ({
            currentSlide: prevState.currentSlide + scrollAmount,
            translateX: prevState.translateX - (panelWidth * scrollAmount),
            progressMove: prevState.progressMove + (distanceBetween * scrollAmount)
          }), () => {
            const activeNav = document.querySelector('.active');
            activeNav.classList.remove('active');
            const currentNavItem = document.querySelectorAll('.Navigation a')[this.state.currentSlide];
            currentNavItem.classList.add('active');

            const prevOverlay = document.querySelectorAll('.overlay')[this.state.currentSlide - scrollAmount];
            var overlay = document.querySelectorAll('.overlay')[this.state.currentSlide];
            prevOverlay.style.opacity = ".3";
            overlay.style.opacity = "0";
            this.updateHelmet();

          });
        }
      }
      this.setState({
        recentlyScrolled: true
      });
      setTimeout(() => {
        this.setState({recentlyScrolled: false});
      }, 800)
    }
    }

    var target = document.getElementsByClassName('overlay')[this.state.currentSlide];
    target.style.opacity = "0";
  }

  handleScroll = (e) => {
    let direction = "";
    if(e.deltaY < 0 || e.key === "ArrowLeft") {
      direction = "up";
    } else if(e.deltaY > 0 || e.key === "ArrowRight") {
      direction = "down";
    }
    this.scrollMechanic(direction);
  }

  handleNavigation = (e) => {
    var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(browserWidth > 1150) {
      e.preventDefault();
    }

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
      <Helmet>
        <title>{this.state.helmetTitle === 'SorenDev' ? this.state.helmetTitle : this.state.helmetTitle + ' - SorenDev'}</title>
      </Helmet>
        <Panel showcaseProjects={showcaseProjects} openPortfolio={this.openPortfolio} moveLeft={this.state.translateX}/>
        { this.state.displayProjects ? <PortfolioShowcase projects={projects} closePortfolio={this.closePortfolio}/> : null}
        <Navigation handleNavigation={this.handleNavigation} progressMove={this.state.progressMove}/>
      </div>
    );
  }
}

export default App;

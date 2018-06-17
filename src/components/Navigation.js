import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    handleMenu(e) {
        this.setState((prevState) => ({
            active: !prevState.active
        })); 
        // Scroll to section - Desktop
        if(e.currentTarget.nodeName === "A") {
            this.props.handleNavigation(e);
        }
    }

    render() {
        let styles = {
            transform: `translateX(calc(${this.props.progressMove}px))`
        }
        return (
            <div className="Navigation">
            <nav className={this.state.active ? "show" : null}>
                <div className="hamburger-menu" onClick={this.handleMenu.bind(this)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul>
                    <li>
                        <a className="active" href="#Welcome" data-panel="0" onClick={this.handleMenu.bind(this)}>
                            <p>Welcome</p>
                            <div className="nav-point">
                                <div className="bullet"></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#Portfolio" data-panel="1" onClick={this.handleMenu.bind(this)}>
                            <p>Portfolio</p>
                            <div className="nav-point">
                                <div className="bullet"></div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#Contact" data-panel="2" onClick={this.handleMenu.bind(this)}>
                            <p>Contact</p>
                            <div className="nav-point">
                                <div className="bullet"></div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className="line">
                    <div className="progress" style={styles}></div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navigation;
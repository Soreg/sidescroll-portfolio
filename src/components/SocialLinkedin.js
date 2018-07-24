import React from 'react';
import FontAwesome from 'react-fontawesome';

class SocialLinkedin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    }
  }
  handleHoverEnter = () => {
    this.setState(() => ({
      hovering: true
    }))
  }

  handleHoverLeave = () => {
    this.setState(() => ({
      hovering: false
    }))
  }



  render() {
    return (
      <div className="social-icon">
        {
          <div className={this.state.hovering ? 'data-info data-info-linkedin hover' : 'data-info data-info-linkedin'}>
            <React.Fragment>
              <p>Søren Gravesen</p>
            </React.Fragment>
          </div>
        }
        <a className="social-link" href="https://www.linkedin.com/in/soreg/" target="_blank" rel="noopener noreferrer">
          <FontAwesome className="social-icon" name="linkedin" onMouseEnter={this.handleHoverEnter} onMouseLeave={this.handleHoverLeave}/>
        </a>
      </div>
    );
  }
};

export default SocialLinkedin;
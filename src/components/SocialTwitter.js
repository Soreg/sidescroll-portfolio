import React from 'react';
import FontAwesome from 'react-fontawesome';

class SocialTwitter extends React.Component {
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
          <div className={this.state.hovering ? 'data-info data-info-twitter hover' : 'data-info data-info-twitter'}>
            <React.Fragment>
              <p>SorenWebDev</p>
            </React.Fragment>
          </div>
        }
        <a className="social-link" href="https://twitter.com/SorenWebDev" target="_blank" rel="noopener noreferrer">
          <FontAwesome className="social-icon" name="twitter" onMouseEnter={this.handleHoverEnter} onMouseLeave={this.handleHoverLeave}/>
        </a>
      </div>
    );
  }
};

export default SocialTwitter;
import React from 'react';
import FontAwesome from 'react-fontawesome';

class SocialGithub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
      repos: undefined,
      name: undefined,
      followers: undefined,
      hovering: false
    }
  }

  componentDidMount() {
      fetch('https://api.github.com/users/Soreg')
      .then(response => response.json())
      .then(response => {
        this.setState({
          repos: response.public_repos,
          name: response.name,
          followers: response.followers,
          fetched: true
        })
      }
    )
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
          <div className={this.state.hovering ? 'data-info data-info-github hover' : 'data-info data-info-github'}>
          {
            this.state.fetched && 
            <React.Fragment>
              <p>{this.state.name}</p>
              <p>Repos: {this.state.repos}</p>
              <p>Followers: {this.state.followers}</p>
            </React.Fragment>
          }
          </div>
        }
        <a className="social-link" href="https://github.com/Soreg" target="_blank" rel="noopener noreferrer">
          <FontAwesome className="social-icon" name="github" onMouseEnter={this.handleHoverEnter} onMouseLeave={this.handleHoverLeave}/>
        </a>
      </div>
    );
  }
};

export default SocialGithub;
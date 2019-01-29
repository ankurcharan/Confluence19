import React, { Component } from 'react';

import { Link as ScrollLink, Events as ScrollObj } from 'react-scroll';

import './static/navigation.css';

class Navigation extends Component {
  componentDidMount() {
    ScrollObj.scrollEvent.register('end', () => {
      this.props.toggleNavigation();
    })
  }
  render() {
    return (
      <nav className={`Navigation ${(this.props.isActive) ? 'Navigation--active' : ''}`}>
        <button className="handle_button handle_button--active" onClick={() => this.props.toggleNavigation()}>
          <svg>
            <use xlinkHref={window.location.href + 'img/arrow.svg#arrow'} />
          </svg>
        </button>
        <div className="nav_logo">Logo</div>
        <div className="nav_links">
          <ul className="nav_link_list">
            <ScrollLink to="Gallery_Section" className="nav_item" smooth={true} duration={500}><li>Gallery</li></ScrollLink>
            <ScrollLink to="About_Section" className="nav_item" smooth={true} duration={500}><li>About Us</li></ScrollLink>
            <ScrollLink to="Events_Section" className="nav_item" smooth={true} duration={500}><li>Events</li></ScrollLink>
            <li>Sponsors</li>
            <li>The Team</li>
          </ul>
        </div>
        <div className="nav_social">
          <div className="icon icon_instagram">
            <svg>
              <use xlinkHref={window.location.href + 'img/instagram.svg#instagram'} />
            </svg>
          </div>
          <div className="icon icon_facebook">
            <svg>
              <use xlinkHref={window.location.href + 'img/facebook.svg#facebook'} />
            </svg>
          </div>
          <div className="icon icon_youtube">
            <svg>
              <use xlinkHref={window.location.href + 'img/youtube.svg#youtube'} />
            </svg>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

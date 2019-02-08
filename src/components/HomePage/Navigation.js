import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          {/*<svg>
            <use xlinkHref={window.location.href + 'img/arrow.svg#arrow'} />
          </svg>*/}
          <div className="handle_bar"></div>
        </button>
        <div className="nav_logo"></div>
        <div className="nav_links">
          <ul className="nav_link_list">
            <ScrollLink to="Gallery_Section" className="nav_item" smooth={true} duration={500}><li>Gallery</li></ScrollLink>
            <ScrollLink to="About_Section" className="nav_item" smooth={true} duration={500}><li>About Us</li></ScrollLink>
            <ScrollLink to="Events_Section" className="nav_item" smooth={true} duration={500}><li>Events</li></ScrollLink>
            <Link to='/sponsors' className="nav_item">
              <li>Sponsors</li>
            </Link>
            <Link to='/team' className="nav_item">
              <li>The Team</li>
            </Link>
            <Link to='/developers' className="nav_item">
              <li>Developers</li>
            </Link>

          </ul>
        </div>
        <div className="nav_social">
          <div className="icon icon_instagram">
            <svg>
              <a href="https://wwww.instagram.com/conflu.nitkkr"><use xlinkHref={window.location.href + 'img/instagram.svg#instagram'} /></a>
            </svg>
          </div>
          <div className="icon icon_facebook">
            <svg>
            <a href="https://www.facebook.com/Conflu/"><use xlinkHref={window.location.href + 'img/facebook.svg#facebook'} /></a>
            </svg>
          </div>
          <div className="icon icon_youtube">
            <svg>
            <a href="https://www.youtube.com/user/photonitk"><use xlinkHref={window.location.href + 'img/youtube.svg#youtube'} /></a>
            </svg>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Navigation from './Navigation';
import Banner from './banner';
import Gallery from './Gallery';
import Aboutus from './Aboutus';
import Events_Page from './Events_Page';
import Footer from './Footer';
import './static/superapp.css';
import './static/HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  toggleNavigation = () => {
    this.setState((state) => {
      return { active: !state.active }
    })
  }

  render() {
    return (
      <div className="Super_App">
        <Navigation isActive={this.state.active} toggleNavigation={this.toggleNavigation} />
        <ParallaxProvider>
          <div className={`HomePage ${(this.state.active) ? 'App-nav-active' : ''}`}>
            <Banner />
            <Gallery />
            <Aboutus />
            <Events_Page />
            <Footer />
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default HomePage;
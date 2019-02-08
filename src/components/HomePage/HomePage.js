import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
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
      active: false,
    }
  }

  toggleNavigation = () => {
    this.setState((state) => {
      return { active: !state.active }
    })
  }

  componentDidMount() {
    setTimeout(function () {
      let x = document.getElementById('loader'); 
      if(x) {
        x.remove();
      }      
      document.getElementById('root').classList.remove('hide');
    }, 1000);
  }

  render() {
    return (
      <div className="Super_App">
        <Navigation isActive={this.state.active} toggleNavigation={this.toggleNavigation} />
        <ParallaxProvider>
          <div className={`HomePage ${(this.state.active) ? 'App-nav-active' : ''}`}>
            <a href='https://goo.gl/forms/A4bBLWijIxgQ7qR93' target='_blank' rel="noopener noreferrer">
              <div className="Register_button">
                <svg>
                  <use xlinkHref={window.location.href + '/img/register.svg#register'}></use>
                </svg>
              </div>
            </a>
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

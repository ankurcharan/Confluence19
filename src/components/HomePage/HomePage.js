import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './Navigation';
import Banner from './banner';
import Gallery from './Gallery';
import Aboutus from './Aboutus';
import EventsPage from './Events_Page';
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
            <a 
              href='https://www.townscript.com/e/confluence19-313424' 
              target='_blank' 
              rel="noopener noreferrer"
            >
              <div className="starNight_button">
                {/* <svg>
                  <use xlinkHref={window.location.href + '/img/register.svg#register'}></use>
                </svg> */}
                <img
                  className='circle'
                  src='https://i.ibb.co/VpyZhss/aditi.jpg'
                  alt='Star Night'
                />
              </div>
            </a>
            <Banner />
            <Gallery />
            <Aboutus />
            <EventsPage />
            <Footer />
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default HomePage;

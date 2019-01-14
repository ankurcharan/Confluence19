import React from 'react';
import M from 'materialize-css';

import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import './Home.css';
import EventsGenre from './eventsGenre.js';
import ReactFullpage from '@fullpage/react-fullpage';

import './About.css';
import './ScrollNav.css';

import './aboutconfluence.css';
import './indexcs.css';

import street from './bg-016.jpg';
import logo from './Confluence Logo.png';

// import EventsGenre from './eventsGenre.js'

class ScrollNav extends React.Component {
	
	render() {
		
		return (
			
			<React.Fragment>

				<aside>
					<div class="fixed-nav  hide-on-small-only">
						<ul class="fixed-nav__list">
                            <li class="fixed-nav__list-item">
								<a href="#1">
									<span class="fixed-nav__line"></span>
									<span class="fixed-nav__number">01</span>
									<span class="fixed-nav__name">Home</span>
								</a>
							</li>
                            <li class="fixed-nav__list-item ">
								<a href="#2">
									<span class="fixed-nav__line"></span>
									<span class="fixed-nav__number">02</span>
									<span class="fixed-nav__name">About Confluence</span>
								</a>
							</li>
                            <li class="fixed-nav__list-item ">
								<a href="#3">
									<span class="fixed-nav__line"></span>
									<span class="fixed-nav__number">03</span>
									<span class="fixed-nav__name">Events</span>
								</a>
							</li>
                            <li class="fixed-nav__list-item ">
								<a href="#4">
									<span class="fixed-nav__line"></span>
									<span class="fixed-nav__number">04</span>
									<span class="fixed-nav__name">Photos</span>
								</a>
							</li>
                            <li class="fixed-nav__list-item ">
								<a href="#5">
									<span class="fixed-nav__line"></span>
									<span class="fixed-nav__number">05</span>
									<span class="fixed-nav__name">Contact Us</span>
								</a>
							</li>
                    	</ul>
					</div>
				</aside>

			</React.Fragment>
			
		);			
	}
}
	

class Confluence extends React.Component {
	
	render() {
		
		return (
			<div>
			home video background
			{/*yahan wo video wala backhround daalana hai so try that */}
			
			<Link to='/events/music'>music</Link>
			<br />
			<Link to='/events/literature'>literature</Link>
			<br />
			<Link to='/events/photography'>photography</Link>
            <br />
			<Link to='/gallery'>gallery</Link>
            </div>
		);
	}
}

class AboutConfluence extends React.Component {

    componentDidMount() {
        // document.addEventListener('DOMContentLoaded', function () {
        // var elems = document.querySelectorAll('.parallax');
        // var instances = M.Parallax.init(elems, {});
        // });

    }

    render() {

        return (
            <div>
                
                <div className="about3">
                    <div className="about2 center">
                        <span>C</span>
                        <span>A</span>
                        <span>R</span>
                        <span>N</span>
                        <span>I</span>
                        <span>V</span>
                        <span>A</span>
                        <span>L</span>
                        <span>&nbsp;</span>
                        <span>O</span>
                        <span>F</span>
                        <span>&nbsp;</span>
                        <span>H</span>
                        <span>E</span>
                        <span>R</span>
                        <span>I</span>
                        <span>T</span>
                        <span>A</span>
                        <span>G</span>
                        <span>E</span>
                    </div>

                    <p className="center white-text textf">Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br />
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />
                        consequat. Duis aute irure dolor in reprehenderit in voluptate <br />
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <br />
                        sint occaecat cupidatat non proident, sunt in culpa qui officia<br />
                        deserunt mollit anim id est laborum</p>
                </div>
                <div className="container1">
                    <div class="bird-container one1">
                        <div class="bird one"></div>
                    </div>

                    <div class="bird-container two2">
                        <div class="bird two"></div>
                    </div>

                    <div class="bird-container three3">
                        <div class="bird three"></div>
                    </div>

                    <div class="bird-container four4">
                        <div class="bird four"></div>
                    </div>

                </div>

            </div>


        );
    }
}
	
class Photos extends React.Component {
	
	render() {
		
		return (
			<div>
			photos here
			{/*kuch slight fotos but redirection ka link rkhege jahan aur bhi jyada photos videos hngi */}
			</div>
		);
	}
}

class ContactUs extends React.Component {
	
	render() {
		return (
			<div>
			Query Form here
			{/**yahan pe query wala form daalege contact us and some other links */}
			<a href="#1">jhghjb</a>
			</div>
		);
	}
}
	
// {/** I have made background for different colors for the sake of differentiation. We will use a fixed background in the final production */}
    

class Ajeeb extends React.Component {
    render() {
      return (
        <Carousel>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
        </Carousel>
      );
    }
  }

const Fullpage = () => (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>

            
            <div className="center">
                <div id="1" class="section page center grey darken-2 section scrollspy">
                    <Confluence />
                </div>
                <div id="2" class="section page center red darken-2 section scrollspy">
                    <AboutConfluence />
                </div>
                <div id="3" class="section page center darken-2 section scrollspy">
                    {/**
                        <EventsGenre />
                    */}
                    <h1>Events</h1>
                </div>
                <div id="4" class="section page center pink darken-2 section scrollspy">
                    <Ajeeb />
                </div>
                <div id="5" class="section page center yellow darken-2 section scrollspy">
                    <ContactUs />
                </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );



class Home extends React.Component {    


    componentDidMount() {

        let elems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(elems, {
            scrollOffset: 0,
            throttle: 10
        });
    }

    render () {

        return (
            
        <>
            <div>
                <img className="logoconfluence" src={logo} alt="not loading" />
            </div>
            <a id='register' class="responsive-text transparent black-text waves-effect waves-light btn pink">Register</a>

            <div className='center' id="main">
                <div id="list" class="hide-on-small-only">
                    <ul>
                        <li><a href="#1" class="navtext">CONFLUENCE</a></li>
                        <li><a href="#2" class="navtext">ABOUT CONFLUENCE</a></li>
                        <li><a href="#3" class="navtext">EVENTS</a></li>
                        <li><a href="#4" class="navtext">GALARY</a></li>
                        <li><a href="#5" class="navtext">CONTACT US</a></li>
                    </ul>
                </div>
                <Fullpage />
            </div>
        </>

        );
    }
}

export default Home;
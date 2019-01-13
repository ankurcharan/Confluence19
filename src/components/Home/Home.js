import React from 'react';
import M from 'materialize-css';

import { Link } from 'react-router-dom';

import './Home.css';
import ReactFullpage from '@fullpage/react-fullpage';

import './About.css';
import './ScrollNav.css';

import './aboutconfluence.css';
import './indexcs.css';
import $ from 'jquery';

import logo from './Confluence Logo.png';
 
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

        $(function(){  // $(document).ready shorthand
            $('.monster').fadeIn('slow');
          });
          
          $(document).ready(function() {
              
              /* Every time the window is scrolled ... */
              $(window).scroll( function(){
              
                  /* Check the location of each desired element */
                  $('.hideme').each( function(i){
                      
                      var bottom_of_object = $(this).position().top + $(this).outerHeight();
                      var bottom_of_window = $(window).scrollTop() + $(window).height();
                      
                      /* If the object is completely visible in the window, fade it it */
                      if( bottom_of_window > bottom_of_object ){
                          
                          $(this).animate({'opacity':'1'},3000);
                              
                      }
                      
                  }); 
              
              });
              
          });
    }

    render() {

        return (
            <div>
                
                <div className="about3 hideme black-text">
                    <div className="about2 center" style={{
                    	'font-size': '20px'
                    }}>
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

                    <p className="center textf">Lorem ipsum dolor sit amet, consectetur <br />
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
					

const Fullpage = () => (
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>

            


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
                <img id="logoconfluence" src={logo} alt="not loading" />
            </div>
            <a href='#register' id='register' className='responsive-text transparent black-text waves-effect waves-teal btn-flat'>Register</a>

            <div className='center' id="main">
                <div id="list" class="hide-on-small-only">
                    <ul>
                        <li><a href="#1" class="navtext">CONFLUENCE</a></li>
                        <li><a href="#2" class="navtext">ABOUT CONFLUENCE</a></li>
                        <li><a href="#3" class="navtext">EVENTS</a></li>
                        <li><a href="#4" class="navtext">GALLERY</a></li>
                        <li><a href="#5" class="navtext">CONTACT US</a></li>
                    </ul>
                </div>











                <div>
            <div>
                {/* <img className="logoconfluence" src={logo} alt="not loading"></img>
                <a class="register responsive-text transparent black-text waves-effect waves-light btn pink">Register</a> */}
                </div>
                <div className='center'>

                <div id="1" class="page center grey darken-2 active section scrollspy">
                    <Confluence />
                </div>
                <div id="2" class="page center about-confluence active section scrollspy">
                    <AboutConfluence />
                </div>


                <div id="3" class="page center darken-2 active section scrollspy">
                    {/* <EventsGenre /> */}
                    <h1>Events</h1>
                </div>
                <div id="4" class="page center pink darken-2 active section scrollspy">
                    <Photos />
                </div>
                <div id="5" class="page center yellow darken-2 active section scrollspy">
                    <ContactUs />
                </div>
            </div>
            </div>

















                {/* <Fullpage /> */}
            </div>
        </>

        );
    }
}

export default Home;
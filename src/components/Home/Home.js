import React from 'react';
import M from 'materialize-css';

import { Link } from 'react-router-dom';

import './Home.css';
import './aboutconfluence.css';
import './indexcs.css';
import $ from 'jquery';
import EventsGenre from './eventsGenre.js';

import street from './bg-016.jpg';
import logo from './conlogo.png';
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


class Home extends React.Component {

    componentDidMount() {

        let elems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(elems, {
            scrollOffset: 0,
            throttle: 10
        });
    }

    render() {

        return (
            <div>
            <div>
                <img className="logoconfluence" src={logo} alt="not loading"></img>
                <div  className="scrollnav hide-on-small-only">
                    <a href="#1">Home</a><br></br>
                    <a href="#2">About Confluence</a><br></br>
                    <a href="#3">Events</a><br></br>
                    <a href="#4">Photos</a><br></br>
                    <a href="#5">Contact Us</a><br></br>
                </div>
                <a class="register responsive-text transparent black-text waves-effect waves-light btn pink">Register</a>
                </div>
                <div className='center'>

                <div id="1" class="page center grey darken-2 active section scrollspy">
                    <Confluence />
                </div>
                <div id="2" class="page center about-confluence active section scrollspy">
                    <AboutConfluence />
                </div>


                <div id="3" class="page center darken-2 active section scrollspy">
                    <EventsGenre />
                </div>
                <div id="4" class="page center pink darken-2 active section scrollspy">
                    <Photos />
                </div>
                <div id="5" class="page center yellow darken-2 active section scrollspy">
                    <ContactUs />
                </div>
            </div>
            </div>
        );
    }
}

export default Home;
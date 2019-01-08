import React from 'react';
import M from 'materialize-css';

import { Link } from 'react-router-dom';

import './Home.css';
import './aboutconfluence.css';
import './indexcs.css';
import EventsGenre from './eventsGenre.js';

import street from './street.jpg';

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
        // document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, {});
        // });

    }

    render() {

        return (
            <div>
            <div className="about3">
            <div className="about2 center">
                <span>S</span>
                <span>H</span>
                <span>A</span>
                <span>R</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
                <span>&nbsp;</span>
                <span>L</span>
                <span>I</span>
                <span>G</span>
                <span>H</span>
                <span>T</span>
                <span>S</span>
            </div>

            <p className="center white-text textf">Lorem ipsum dolor sit amet, consectetur <br/>
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br/>
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>
            exercitation ullamco laboris nisi ut aliquip ex ea commodo <br/>
            consequat. Duis aute irure dolor in reprehenderit in voluptate <br/>
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <br/>
            sint occaecat cupidatat non proident, sunt in culpa qui officia<br/>
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


class Parralaxinbetween extends React.Component {

    componentDidMount() {
        // document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, {});
        // });

    }

    render() {

        return (
            <div>
                <div class="parallax-container">
                    <div class="parallax imgs" >
                        <img src={street} className="responsive-img"/>
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

            <div className='center'>

                <div id="1" class="page center grey darken-2 active section scrollspy">
                    <Confluence />
                </div>
                <div id="2" class="page center about-confluence active section scrollspy">
                    <AboutConfluence />
                </div>
                <div id="3" class="page center imgs active section scrollspy">
                    <Parralaxinbetween />
                </div>
                <div id="4" class="page center darken-2 active section scrollspy">
                    <EventsGenre />
                </div>
                <div id="5" class="page center pink darken-2 active section scrollspy">
                    <Photos />
                </div>
                <div id="6" class="page center yellow darken-2 active section scrollspy">
                    <ContactUs />
                </div>
            </div>

        );
    }
}

export default Home;
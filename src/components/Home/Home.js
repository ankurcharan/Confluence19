import React from 'react';
import M from 'materialize-css';

import { Link } from 'react-router-dom';
import $ from 'jquery';

import './Home.css';
import EventsGenre from './eventsGenre.js'
import ReactFullpage from '@fullpage/react-fullpage';


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

    render() {

        return (
            <div>
                	about Confluence
					{/* yahan pe about confluence wala kaam krna hai */}
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
            <div className="center">
                <div id="1" class="section page center grey darken-2 active section scrollspy">
                    <Confluence />
                </div>
                <div id="2" class="section page center red darken-2 active section scrollspy">
                    <AboutConfluence />
                </div>
                <div id="3" class="section page center darken-2 active section scrollspy">
                    {/**
                        <EventsGenre />
                    */}
                    <h1>Events</h1>
                </div>
                <div id="4" class="section page center pink darken-2 active section scrollspy">
                    <Photos />
                </div>
                <div id="5" class="section page center yellow darken-2 active section scrollspy">
                    <ContactUs />
                </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

class Home extends React.Component {    
    render () {

        return (
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
        );
    }
}

export default Home;
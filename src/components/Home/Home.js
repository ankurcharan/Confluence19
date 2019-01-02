import React from 'react';
import M from 'materialize-css';

import { Link } from 'react-router-dom';

import './Home.css';

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

class EventsGenre extends React.Component {

    render() {

        return (
            <div>
                	events cube
					with tap and move integrated
					{/**mudit integrate krke dega fir events wala cube yahan daalna hai */}
                    <a href="#1">jhghjb</a>
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

    render () {

        return (

            <div className='center'>

                <div id="1" class="page center grey darken-2 active section scrollspy">
                    <Confluence />
                </div>
                <div id="2" class="page center red darken-2 active section scrollspy">
                    <AboutConfluence />
                </div>
                <div id="3" class="page center purple darken-2 active section scrollspy">
                    <EventsGenre />
                </div>
                <div id="4" class="page center pink darken-2 active section scrollspy">
                    <Photos />
                </div>
                <div id="5" class="page center yellow darken-2 active section scrollspy">
                    <ContactUs />
                </div>
            </div>

        );
    }
}

export default Home;
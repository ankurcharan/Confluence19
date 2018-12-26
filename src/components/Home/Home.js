import React from 'react';

import './Home.css';

class Confluence extends React.Component {

    render() {

        return (
            <div id="1" class="page center pink darken-2 active section scrollspy">
                <p>
                    home video background
                    {/*yahan wo video wala backhround daalana hai so try that */}
                </p>
            </div>
        );
    }
}

class AboutConfluence extends React.Component {

    render() {

        return (
            <div id="1" class="page center grey darken-2 active section scrollspy">
                <p>
					about Confluence
					{/* yahan pe about confluence wala kaam krna hai */}
				</p>
            </div>
        );
    }
}

class EventsGenre extends React.Component {

    render() {

        return (
            <div id="1" class="page center teal darken-2 active section scrollspy">
                <p>
					events cube
					with tap and move integrated
					{/**mudit integrate krke dega fir events wala cube yahan daalna hai */}
				</p>
            </div>
        );
    }
}

class Photos extends React.Component {

    render() {

        return (
            <div id="1" class="page center yellow darken-2 active section scrollspy">
                <p>
					photos here
					{/*kuch slight fotos but redirection ka link rkhege jahan aur bhi jyada photos videos hngi */}
				</p>
            </div>
        );
    }
}

class ContactUs extends React.Component {

    render() {
        return (
            <div id="1" class="page center purple darken-2 active section scrollspy">
                <p>
					Query Form here
					{/**yahan pe query wala form daalege contact us and some other links */}
				</p>
            </div>
        );
    }
}

// {/** I have made background for different colors for the sake of differentiation. We will use a fixed background in the final production */}

class Home extends React.Component {

    render () {

        return (

				
                <div className='pages'>
                    <Confluence />
                    <AboutConfluence />
                    <EventsGenre />
                    <Photos />
                    <ContactUs />
                </div>

        );
    }
}

export default Home;
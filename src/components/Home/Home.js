import React from 'react';
import M from 'materialize-css';

import { Link } from 'react-router-dom';


import './Home.css';
import './ScrollNav.css';

import EventsGenre from './eventsGenre.js'

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
					

class Home extends React.Component {

componentDidMount() {
	
	let elems = document.querySelectorAll('.scrollspy');
	M.ScrollSpy.init(elems, {
		scrollOffset: 0,
		throttle: 10
	});
}

render () {

	const siv = {

		// position: fixed
	}
	
	return (
		
		

		<>

			<aside>
				<ul style={siv}>
					<li>Heyy</li>
					<li>Heyy</li>
					<li>Heyy</li>
					<li>Heyy</li>
					<li>Heyy</li>
				</ul>
			</aside>


			<ScrollNav />

			<div className='center'>
			
				<div id="1" class="page center grey darken-2 section scrollspy">
					<Confluence />
				</div>
				<div id="2" class="page center red darken-2 section scrollspy">
					<AboutConfluence />
				</div>
				<div id="3" class="page center darken-2 section scrollspy">
					<EventsGenre />
				</div>
				<div id="4" class="page center pink darken-2 section scrollspy">
					<Photos />
				</div>
				<div id="5" class="page center yellow darken-2 section scrollspy">
					<ContactUs />
				</div>
			</div>
			
		</>

		);
	}
}

export default Home;
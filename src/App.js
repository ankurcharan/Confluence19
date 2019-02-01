import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

// import Nav from './components/Nav/Nav';
// import Footer from './components/Footer/Footer';
import Events from './components/Events/Events';
import Home from './components/Home/Home';

import Register from './components/Home/Register/Register.js';
import Sponsors from './components/Sponsors/Sponsors';
import Team from './components/TeamConfluence/TeamConfluence';

import Gallery from './components/Gallery/Gallery';

import EventsCategory from './components/EventsCategory/EventsCategory';
import TeamConflu2 from './components/TeamConfluence/TeamConflu2';


import AddEvent from './components/Admin/Admin';


class Page404 extends React.Component {

	render() {

		return (

			<div className='center'>

				<Link to='/'>Go Home</Link>

			</div>

		);
	}
}


class App extends Component {
	render() {
		return (
			<BrowserRouter>

				<div>
					{/* <Nav /> */}

					<React.Suspense fallback={<div>Loading...</div>}>

						<Switch>

							<Route exact path='/events' component={Events} />
							<Route exact path='/gallery' component={Gallery} />
							<Route exact path='/sponsors' component={Sponsors} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/' component={Home} />

							<Route exact path='/team' component={TeamConflu2} />

							<Route exact path='/admin' component={AddEvent} />

							<Route exact path='/events/:category' component={EventsCategory} />


							<Route path='/*' component={Page404} />

						</Switch>
						{/* <Footer /> */}

					</React.Suspense>
				</div>

			</BrowserRouter>
		);
	}
}

export default App;

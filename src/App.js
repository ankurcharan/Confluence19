import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';

// import Nav from './components/Nav/Nav';
// import Footer from './components/Footer/Footer';
import Events from './components/Events/Events';

import Register from './components/Home/Register/Register.js';
import Sponsors from './components/Sponsors/Sponsors';
import Team from './components/TeamConfluence/TeamConfluence';
import Gallery from './components/Gallery/Gallery';
import EventsCategory from './components/EventsCategory/EventsCategory';
<<<<<<< HEAD
import TeamConflu2 from './components/TeamConfluence/TeamConflu2';


=======
>>>>>>> 7c16590a17040881e702329a0b43dce3af375aab
import AddEvent from './components/Admin/Admin';
import HomePage from './components/HomePage/HomePage';

import Developers from './components/Developers/Developers';


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
					<React.Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path='/events' component={Events} />
							<Route exact path='/gallery' component={Gallery} />
							<Route exact path='/sponsors' component={Sponsors} />
							<Route exact path='/register' component={Register} />
<<<<<<< HEAD
							<Route exact path='/' component={Home} />

							<Route exact path='/team' component={TeamConflu2} />

=======
							<Route exact path='/' component={HomePage} />
							<Route exact path='/team' component={Team} />
>>>>>>> 7c16590a17040881e702329a0b43dce3af375aab
							<Route exact path='/admin' component={AddEvent} />
							<Route exact path='/developers' component={Developers} />
							<Route exact path='/events/:category' component={EventsCategory} />
<<<<<<< HEAD


							<Route path='/*' component={Page404} />

						</Switch>
						{/* <Footer /> */}

=======
							<Route path = '/*' component={Page404} />
						</Switch>
>>>>>>> 7c16590a17040881e702329a0b43dce3af375aab
					</React.Suspense>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

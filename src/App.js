import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>

				<div>
					<Nav />
					<br />
					<br />
					<Footer />
				</div>

			</BrowserRouter>
			);
		}
	}
	
	export default App;
	
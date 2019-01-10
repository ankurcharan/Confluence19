import React from 'react';
import { Link } from 'react-router-dom';

import { getEventsCategory } from '../../selectors';
import { connect } from "react-redux";
import { getEventsByCategory } from '../../actions/action';

class EventsCategory extends React.Component {
	
	componentWillMount() {
		
		const x = this.props.match.params.category.toLowerCase();
		this.props.getEventsByCategory(x);
	}
	
	// shouldComponentUpdate(nextProps, nextState) {

		// console.log('should update');
		// console.log(this.props);
		// console.log(nextProps);

		// if(nextProps === undefined) {
		// 	return true;
		// }

		// let shouldUpdate = this.props.match.params.category !== nextProps.match.params.category;
		// return shouldUpdate;
		// return false;
	// }

	// componentWillUpdate() {
	// 	alert('updating');

	// 	const x = this.props.match.params.category.toLowerCase();
	// 	this.props.getEventsByCategory(x);
	// }
	
	// componentDidUpdate() {

	// 	if(this.shouldComponentUpdate()) {
	// 		const x = this.props.match.params.category.toLowerCase();
	// 		this.props.getEventsByCategory(x);

	// 		this.render();
	// 	}
	// }
	
	render() {
		
		let events = this.props.events;

		// there they are 
		// render them as you want
		
		// events will be null initially before the api call
		// so we'll handle that too
		// if(events === null || events === undefined) {
		// 	alert('see this');
		// }
		
		// let eventsssss = event.map((event, index) => {
		
		
		return (
			
			<div id='events'>
			<h1>events of {this.props.match.params.category}</h1>
			
			{(events && events.length > 0) ? (events.map((event, index) => {
				return (
					<div key={index}>
					<p>{event.eventName}</p>
					<p>{event.venue}</p>
					<p>{event.description}</p>
					<p>{event.category}</p>
					<br />
					</div>
				);
			})) : '' }
				
			
			
			<Link to='/events/music'>music</Link>
			<br />
			<Link to='/events/literature'>literature</Link>
			<br />
			<Link to='/events/photography'>photography</Link>
			<br />
			<Link to='/events/dance'>dance</Link>
			<br />
			<Link to='/'>home</Link>
			</div>			
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	
	const { events } = state;
	const eventsCat = getEventsCategory(events, ownProps.match.params.category);
	return { 
		events: eventsCat 
	};
}

const mapDispatchToProps = {
	getEventsByCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsCategory);
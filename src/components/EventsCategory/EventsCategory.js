import React from 'react';
import { Link } from 'react-router-dom';

import { getEventsCategory } from '../../selectors';
import { connect } from "react-redux";
import { getEventsByCategory } from '../../actions/action';

class EventsCategory extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			category: this.props.match.params.category.toLowerCase()
		}
	}
	
	componentWillMount() {
		
		this.props.getEventsByCategory(this.state.category);
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

	// componentWillReceiveProps() {
	// 	const x = this.props.match.params.category.toLowerCase();
	// 	this.props.getEventsByCategory(x);
	// }

	// componentWillUpdate() {

	// 	this.props.getEventsByCategory(this.state.category);
	// }
	
	// componentWillUpdate(nextProps, nextState) {
	// 	const x = nextProps.match.params.category.toLowerCase();

	// 	this.setState({
	// 		category: x
	// 	})
	// }

	// componentDidUpdate() {

	// 	if(this.shouldComponentUpdate()) {
	// 		const x = this.props.match.params.category.toLowerCase();
	// 		this.props.getEventsByCategory(x);

	// 		this.render();
	// 	}
	// }
	
	render() {
		
		// let allEvents = this.props.events;

		// let cat = this.props.match.params.category;
		// let events =  allEvents[cat];

		// console.log(cat);
		// console.log('ndering 22 -----', allEvents);

		// let isFetchingEvents = this.props.isFetchingEvents;

		// there they are 
		// render them as you want
		
		// events will be null initially before the api call
		// so we'll handle that too
		// if(events === null || events === undefined) {
		// 	alert('see this');
		// }
		
		// let eventsssss = event.map((event, index) => {
		
		let events = this.props.events;
		let isFetchingEvents = this.props.isFetchingEvents;
		
		return (
			
			<div id='events'>
			<h1>events of {this.props.match.params.category}</h1>
			
			{
				(isFetchingEvents) ? 
				(<h1>loading ...</h1>) :
				(
					(events && events.length > 0) ? (events.map((event, index) => {
					return (
						<div key={index}>
						<p>{event.eventName}</p>
						<p>{event.venue}</p>
						<p>{event.description}</p>
						<p>{event.category}</p>
						<br />
						</div>
					);
					})) : '' 
				)
			}
				
			
			
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
	
	const { events, isFetchingEvents } = state;
	// const eventsCat = getEventsCategory(events, ownProps.match.params.category);
	// return { 
		// events: eventsCat 
	// };

	return {
		events,
		isFetchingEvents
	}
}

const mapDispatchToProps = {
	getEventsByCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsCategory);
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button.js';
import "./mobile.css";
import Loader from "../loader/loader.js";
import {findDOMNode} from 'react-dom';
import $ from "jquery";
import m from 'materialize-css'
import "./eventlist.css";
import Description from "./eventdescription.js";
import './eventdescription.css';
import { getEventsCategory } from '../../selectors';
import { connect } from "react-redux";
import { getEventsByCategory } from '../../actions/action';

class EventsCategory extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			category: this.props.match.params.category.toLowerCase(),
			index:0,
			events:this.props.events,
			status:true
		}
		this.changehandler=this.changehandler.bind(this);
		this.eventhandler=this.eventhandler.bind(this);
	}
	componentWillReceiveProps(nextprops)
	{
		if(nextprops.visible!==this.props.visible)
		{
			if(nextprops.visible)
			{
				$(findDOMNode(this)).stop(true,true).fadeIn("slow");
			}
			else
			{
				$(findDOMNode(this)).stop(true,true).fadeOut("slow");
			}
		}
	}
	changehandler=()=>{
    const current=this.state.status;
    this.setState({
      status:!current
    })
  }
	eventhandler=(i)=> {
		const current=this.state.status;
    this.setState({
      index:i,
			events:this.props.events[i],
			status:!current
    })
	}
	componentWillMount() {

		this.props.getEventsByCategory(this.state.category);
		console.log(this.state.category);
	}

	render() {

		let isFetchingEvents = this.props.isFetchingEvents;

		let events = this.props.events;
		const list = events.map((eve,index)=>{
      return(
        <div>
			<Link to='/'>
				<a class="btn-floating btn-small waves-effect backbutton" href="#!"><i class="material-icons">arrow_back</i></a>
			</Link>
	        <Button
				key={index}
				title={eve.eventName}
	        	click={()=>this.eventhandler(index)}
			/>
        </div>
      )});

			const description=(
				(isFetchingEvents)?
				(<Loader/>):
				(
					<Description
						key={events[this.state.index]}
						events={events[this.state.index]} />
				)
			)
			const list_view=(
				(!this.state.status)?
				(<div className="mobile_list">
					{list}
				</div>):null
			);
		return (
			isFetchingEvents ?
			(
				<Loader/>
			) : (
				<div className="main-body">
				<a class="btn-floating btn-small waves-effect backbutton" href="/"><i class="material-icons">arrow_back</i></a>
				<div className="mobile_events">
				{list_view}
				<div className="right-align buttonbody">
				<div onClick={this.changehandler} >
			{
				(this.state.status)?
					(<i class="material-icons icon1">unfold_more</i>)
					:(<i class="material-icons icon1">unfold_less</i>)
			}
			</div>
				</div>
				</div>
          <div className="row" >
          	<div className="col l9 s12">
							{description}
	          </div>
		         <div className="button-list col l3 s12">
		          {list}
		        </div>
	        </div>
			<div className="lantern1"></div>
			<div className="lantern2"></div>
			<div className="lantern3"></div>
			<div className="lantern4"></div>
			<div className="lantern5"></div>
				</div>
			
				
			
				)
			)
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

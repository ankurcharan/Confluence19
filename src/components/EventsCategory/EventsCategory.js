import React from 'react';

import { getEventsCategory } from '../../selectors';
import { connect } from "react-redux";
import { getEventsByCategory } from '../../actions/action';

class EventsCategory extends React.Component {

    componentWillMount() {

        const x = this.props.match.params.category;
        this.props.getEventsByCategory(x);
    }

    render() {
        
        let events = this.props.events;
        // there they are 
        // render them as you want

        // events will be null initially before the api call
        // so we'll handle that too
        if(events === null || events === undefined) {
            alert('see this');
        }

        return (
            <h1>events of {this.props.match.params.category}</h1>
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
import React from 'react';

import { Link } from 'react-router-dom';

import M from 'materialize-css';

{/** 
// {
//     "eventName": "EventName2",
//     "startTime": "1545522259731",
//     "endTime": "1545522259731",
//     "category": "Music",
//     "rules": [
//     	"This is a rule.",
//     	"This is another rule"
//     ],
//     "venue": "EventVenue",
//     "coordinators": [
//     	{
// 	    	"name": "Coordinator1",
// 	    	"contact": "9878987678"
//     	},
//     	{
//     		"name": "Coordinator2",
//     		"contact": "9878976789"
//     	}
//     ],
//     "prize": "10,000",
//     "imageUrl": "https://firebasestorage.googleapis.com/v0/b/confluence19.appspot.com/o/EventPosters%2FFake%20Poster.png?alt=media&token=ded9da16-3753-455a-8cc7-448cc5ef196b"
// }
*/}

class AddEvent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventName: '',
            startTime: '',
            endTime: '',
            category: '',
            rules: [],
            venue: '',
            coordinators: [],
            prize: '',
            imageUrl: ''
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDateChange(e) {

        let instance = M.Timepicker.getInstance(e.target);

        let d = instance.toString();
        alert(d);
        this.setState({
            startTime: d
        })
    }

    componentDidMount() {

        let elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, {

        });
    }

    render() {

        return (

            <div className='valign-wrapper'>

            <div className='container'>

                <div id='addEvent' className='center'>                
                    Add Event
                </div>


                    <div className='row'>
                    
                        <div class="input-field col s12">
                            <input 
                                placeholder='Event Name' 
                                id='eventName' 
                                name='eventName'
                                type='text'
                                class='validate'
                                onChange={this.handleChange}
                            />
                            <label for="eventName">Event Name</label>
                        </div>


                        {/* <div class="input-field col s12">
                            <input 
                                placeholder='' 
                                id='startTime' 
                                name='startTime'
                                type='datetime-local'
                                class=''
                                onChange={this.handleChange}
                            />
                            <label for="startTime">Start</label>
                        </div> */}


                        <div class="input-field col s12">
                            <input 
                                placeholder='' 
                                id='startTime' 
                                name='startTime'
                                type='text'
                                class ='datepicker'
                                onChange={this.handleDateChange}
                            />
                            <label for="startTime">Start Time</label>
                        </div>

                    </div>


                

            </div>


            </div>

        );
    }
    

}

export default AddEvent;
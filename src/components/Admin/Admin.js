import React from 'react';

import M from 'materialize-css';

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
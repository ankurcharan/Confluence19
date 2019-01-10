import React, {Component} from 'react';
import Button from './button.js';
import Mobile from './mobile_events.js';
import "./eventlist.css";
import Description from './eventdescription.js';
class Eventlist extends Component
{
  state={
    index:0,
  }
  eventhandler=(i)=>{
    this.setState({
      index:i
    })
  }
  render(){
    const events=["event 1","event 2","event 3","event 4"];
    const list=events.map((eve,index)=>{
      return(
        <div>
        <Button title={eve}
        click={()=>this.eventhandler(index)}/>
        </div>
      )
    })
    return(
      <div>
          <div className="hide-on-med-and-up">
            <Mobile/>
          </div>
          <div className="row hide-on-small-only" >
          <div>
          <Description index={this.state.index}/>
          </div>
        <div className="button-list col s12 l2">
          {list}
        </div>
        </div>
      </div>
    )
  }
}
export default Eventlist;

import React,{Component} from 'react';
import './eventdescription.css';
import Aux from "../../hoc/Auxi.js";


class description extends Component{

  render(){
    return(
      <>

      {
        (!this.props.events) ?
        (
          <h1>loading ..</h1>
        ) : (
          <div>
            <h1 className="title row">
              {this.props.events.eventName}
            </h1>
          <div className="row ">
            <div className="card1">
                  <p>{this.props.events.description}</p>
            </div>
          </div>
          </div>
        )
      }

      </>
    )
  }
}
export default description;

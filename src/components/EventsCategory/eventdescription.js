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
            <h1 className="titlename row center-align">
              {this.props.events.eventName}
            </h1>
          <div className="row ">
            <div className="card1">
            {
                    this.props.events.description?
                    (
                    <>
                    <h2 className="heading1">Description</h2>  
                    <p className="heading2">{this.props.events.description}</p>
                    </>
                    ):null  
                  }
                  {
                    (this.props.events.rules.length > 0) ?
                    (
                      <>
                      <h2 className="heading1">Rules</h2>  
                    <ul>
                      {
                      this.props.events.rules.map((rule, i)=>{
                        return(<li className="heading2 list1">{i+1}. {rule}</li>)
                      })
                      }
                    </ul>
                    </>
                    ):null  
                  }
                  {
                    this.props.events.prize?
                    (
                      <>
                    <h2 className="heading1">Prize</h2>  
                    <p className="heading2">{this.props.events.prize}</p>
                    </>
                    ):null  
                  }
                  <h2 className="heading1">Venue</h2>
                  <p className="heading2">{this.props.events.venue}</p>
                  <h2 className="heading1">Coordinators</h2>
                  {
                    this.props.events.coordinators.map(cor=>{
                      return(<p className="heading2">{cor}</p>)
                    })
                  }

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

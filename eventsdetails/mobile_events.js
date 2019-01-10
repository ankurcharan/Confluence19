import React ,{Component} from 'react';
import Button from './button.js';
import "./mobile.css";
import Description from './eventdescription.js';
class mobile extends Component{
  state={
    status:true,
    index:0
  };
  changehandler=()=>{
    const current=this.state.status;
    this.setState({
      status:!current
    })
  }
  eventhandler=(index)=>{
    const current=this.state.status;
    this.setState({
      index:index,
      status:!current
    })
  }
  render(){
    const events=["event 1","event 2","event 3","event 4"];

      console.log(this.state.status);
    const list=events.map((eve,index)=>{
      return(
        <div>
        <Button  title={eve}
        click={()=>this.eventhandler(index)}/>
        </div>
      )
    })
    const listitems=(
      <div className="listitems">{list}</div>
    )

    let current;
        if(this.state.status)
        {current=<Description index={this.state.index}/>}
        else {
          current=listitems
        }

    return(
      <div>
        <div className="body">
        {current}
        </div>
      <div className="right-align buttonbody">
        <div onClick={this.changehandler} className="button "></div>
      </div>
      </div>
    )
  }
}
export default mobile;

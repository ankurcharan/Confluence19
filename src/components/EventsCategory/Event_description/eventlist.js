import React, {Component} from 'react';
import Button from './button.js';
import Slide from '@material-ui/core/Slide';
import Description from './eventdescription.js';
class Eventlist extends Component
{
  state={
    index:0,
    detail:[false,false,false,false]
  }
  eventhandler=(i)=>{
    const newdetail=[...this.state.detail];
    if(newdetail[i]==true)
      newdetail[i]=!newdetail[i];
    else
    {
      newdetail.map((item,index)=>{
        newdetail[index]=false
      });
      newdetail[i]=true;
    }
    console.log(newdetail);
    this.setState({
      index:i,
      detail:newdetail
    })
  }
  render(){
    const events=["event 1","event 2","event 3","event kajssk4"];
    const list=events.map((eve,index)=>{
        const expanddetail=
        this.state.detail[index] ?
        <Slide direction="left" in={this.state.detail[index]} mountOnEnter unmountOnExit>
        <Description index={index}/>
        </Slide>:null
      return(
        <div>
        <Button title={eve}
        click={()=>this.eventhandler(index)}/>
        {expanddetail}
        </div>
      )
    })
    return(
      <div>
      {list}
      </div>
    )
  }
}
export default Eventlist;

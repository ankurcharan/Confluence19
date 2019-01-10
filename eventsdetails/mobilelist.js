import React ,{Component} from 'react';
class mobilelist extends Component{
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
        <Button title={eve}
        click={()=>this.eventhandler(index)}/>
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

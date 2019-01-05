import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import './eventdescription.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
const desc =[{title:"event 1", description:"sample text", coordinators:"ram, shayam", prize:"20000"},
            {title:"event 2", description:"sample text", coordinators:"ram, shayam", prize:"20000"},
            {title:"event 3", description:"sample text", coordinators:"ram, shayam", prize:"20000"},
            {title:"event 4", description:"sample text", coordinators:"ram, shayam", prize:"20000"}
          ];
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
class description extends Component{
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render(){
    return(
      <div className="card">
        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} centered >
            <Tab label="Description" />
            <Tab label="Coordinators" />
            <Tab label="Prize" />
          </Tabs>
        </AppBar>
        {this.state.value === 0 && <TabContainer >{desc[this.props.index].description}</TabContainer>}
        {this.state.value === 1 && <TabContainer>{desc[this.props.index].coordinators}</TabContainer>}
        {this.state.value === 2 && <TabContainer>{desc[this.props.index].prize}</TabContainer>}
      </div>
    )
  }
}
export default description;

import React from 'react';
import Button from '@material-ui/core/Button';
import './button.css';
const button=(props)=>{
  return(
    <div className="name">
    <Button className="main" variant="outlined" color="secondary" onClick={props.click}>
        {props.title}
      </Button>
    </div>
  )
}
export default button;

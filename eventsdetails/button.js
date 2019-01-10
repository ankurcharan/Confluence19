import React from 'react';
import './button.css';
const button=(props)=>{
  return(
    <div className="main">
    <button className="name" onClick={props.click}>
        {props.title}
      </button>
    </div>
  )
}
export default button;

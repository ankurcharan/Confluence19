import React, {Component} from 'react';
// import "./ContactUs.css";
class Contact extends Component{
  render(){
    return(
      <div className="contact">
      <div className="row center-align">
        <img className="logo center-align" src="http://develop.spacemacs.org/layers/+web-services/confluence/img/confluence.png"></img>
      </div>
      <div className="row texta">

        <div className="col l4 s12 m5">
        <h1 className="text follow">LINKS</h1>
        <ul className="text links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">THEME</a></li>
          <li><a href="#">STATICS</a></li>
          <li><a href="#">SOCIAL</a></li>
          <li><a href="#">EVENTS</a></li>
        </ul>
        </div>
        <div className="col l4 s12 m5">

          <h1 className="text follow ">FOLLOW US</h1>
          <ul className="text links ">
            <li><a href="#">FACEBOOK</a></li>
            <li><a href="#">INSTAGRAM</a></li>
            <li><a href="#">GOOGLE</a></li>
            <li><a href="#">SNAPCHAT</a></li>
            <li><a href="#">TWITTER</a></li>
            <li><a href="#">FACEBOOK</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
    <div className="wrapper">
    <a href="#" className="fa fa-facebook"></a>
    <a href="#" className="fa fa-twitter"></a>
    <a href="#" className="fa fa-google"></a>
    <a href="#" className="fa fa-linkedin"></a>
    </div>
    </div>
    </div>
    )
  }
}

export default Contact

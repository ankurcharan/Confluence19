import React,{Component} from 'react';
import "./register.css";
class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      phone:"",
      college:"",
      city:""

    }
    this.nameChangeHandler=this.nameChangeHandler.bind(this);
    this.emailChangeHandler=this.emailChangeHandler.bind(this);
    this.collegeChangeHandler=this.collegeChangeHandler.bind(this);
    this.phoneChangeHandler=this.phoneChangeHandler.bind(this);
    this.submithandler=this.submithandler.bind(this);
  }
  nameChangeHandler=(event)=>{
    this.setState({
      name:event.target.value
    })
  };

  emailChangeHandler=(event)=>{
    this.setState({
      email:event.target.value
    })
  };

  collegeChangeHandler=(event)=>{
    this.setState({
      college:event.target.value
    })
  };

  phoneChangeHandler=(event)=>{
    this.setState({
      phone:event.target.value
    })
  };
  submithandler=(event)=>{
    event.preventDefault();
    console.log(this.state);
  }
  render(){
    return(
      <div className="registration">
        <div class="row5">
            <section class="section">
      <header>
      <h3>Register</h3>
      <h4>Please fill your information bellow</h4>
    </header>
    <main>
      <form>
        <div class="form-item box-item">
          <input type="text" name="name" placeholder="Name" onChange={(event)=>this.nameChangeHandler(event)} data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        <div class="form-item box-item">
          <input type="email" name="email" placeholder="Email" onChange={(event)=>this.emailChangeHandler(event)} data-email data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
          <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
        </div>
        <div class="form-item box-item">
          <input type="text" name="college" placeholder="College Name" onChange={(event)=>this.collegeChangeHandler(event)} data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        <div class="form-item box-item">
          <input type="text" name="phone" placeholder="Phone" onChange={(event)=>this.phoneChangeHandler(event)} data-required data-number data-count="10"/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
          <small class="errorNum"><i class="fa fa-asterisk" aria-hidden="true"></i> must be a number</small>
          <small class="errorChar"><i class="fa fa-asterisk" aria-hidden="true"></i> must be 10 digits</small>
        </div>
        <div class="form-item">
          <span id="submit" class="submit" onClick={(event)=>this.submithandler(event)}>Submit</span>
        </div>
      </form>
    </main>
    <i class="wave"></i>
  </section>
  </div>
      </div>

    )
  }
}
export default Register;

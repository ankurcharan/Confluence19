import React,{Component} from 'react';
import "./register.css";
class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      name:{
        value:""
      },
      email:{
        value:""
      },
      phone:{
        value:""
      },
      college:{
        value:""
      },
      city:{
        value:""
      }

    }
  }
  render(){
    return(
      <div className="registration">
        <div class="row">
            <section class="section">
      <header>
      <h3>Register</h3>
      <h4>Please fill your information bellow</h4>
    </header>
    <main>
      <form>
        <div class="form-item box-item">
          <input type="text" name="name" placeholder="Name" data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        <div class="form-item box-item">
          <input type="email" name="email" placeholder="Email" data-email data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
          <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
        </div>
        <div class="form-item box-item">
          <input type="text" name="college" placeholder="College Name" data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        <div class="form-item box-item">
          <input type="text" name="phone" placeholder="Phone" data-required data-number data-count="10"/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
          <small class="errorNum"><i class="fa fa-asterisk" aria-hidden="true"></i> must be a number</small>
          <small class="errorChar"><i class="fa fa-asterisk" aria-hidden="true"></i> must be 10 digits</small>
        </div>
        <div class="form-item">
          <span id="submit" class="submit">Submit</span>
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

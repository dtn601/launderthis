import React, { Component } from 'react';
import NavLink from './NavLink';
import { hashHistory } from 'react-router'
import '../styles/login.css'

class Signup extends Component {
  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: ''
    };
  }

  signUp(e){

	  this.props.firebase.auth().createUserWithEmailAndPassword(
				this.state.email,
				this.state.password).then(() => {
						console.log(this.props.firebase.auth())
	 				this.props.firebase.database()
					      .ref('/users/'+this.props.firebase.auth().currentUser.uid)
					      .set({

					        firstName: this.state.firstName,
					        lastName: this.state.lastName,
					        phoneNumber: this.state.phoneNumber,
					        email: this.state.email
					      });
	  				hashHistory.push('/Dashboard')
	  					

				}).catch((error) => {
					alert("Account creation failed: " + error.message );
				});	
	  				e.preventDefault()
  }


  render() {


    return (
		<div className="row login-container col-xs-12 col-sm-6 col-sm-offset-3 center-block">
			<div className="row">
				<img src={require("../images/app_logo.png")} 
					 alt={"logo"} 
					 className="appLogo" />
			<p className="transparentText"> One step away from never having to do your laundry again! </p>
			<hr />
			</div>
			<div className="row">
				<form onSubmit={this.signUp.bind(this)}>
					<div className="row">
					<input type="text" 
						   className="primaryButton"
						   onChange={ (text)=>this.setState({firstName: text.target.value}) }
						   value={ this.state.firstName }
						   placeholder={" First Name"} />
					</div>
					<div className="row">
				    <input type="text" 
				    	   className="primaryButton"
						   onChange={ (text)=>this.setState({lastName: text.target.value}) }
						   value={ this.state.lastName }
						   placeholder={" Last Name"} />
					</div>
					<div className="row">
					<input type="text" 
						   className="primaryButton"
						   onChange={ (text)=>this.setState({email: text.target.value}) }
						   value={ this.state.email }
						   placeholder={" Email Address"} />
					</div>
					<div className="row">
				    <input type="password" 
				    	   className="primaryButton"
						   onChange={ (text)=>this.setState({password: text.target.value}) }
						   value={ this.state.password }
						   placeholder={" Password"} />
					</div>
					<div className="row">
				    <input type="text" 
				    	   className="primaryButton"
						   onChange={ (text)=>this.setState({phoneNumber: text.target.value}) }
						   value={ this.state.phoneNumber }
						   placeholder={" Phone Number"} />
					</div>	
								
					<div className="row">
					
					<input type="submit"
						   className="signUpButtonText"
						   value="Sign Up" />
					</div>

				</form>
					<hr />
					<div className="loginInstead">	
					<p> Already have an account?
					<NavLink to="/Login" onlyActiveOnIndex className="transparentButtonText">Login</NavLink>
					</p>
					</div>
			</div>
		</div>
      

    );

  }
}

export default Signup;


import React, { Component } from 'react';
import { login } from './auth';
import NavLink from './NavLink';
import { hashHistory } from 'react-router';
import '../styles/login.css'

class Login extends Component {
  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  handleSubmit(e) {
  	e.preventDefault();
  	console.log(this.state.email, this.state.password)
  	  	login(this.state.email, this.state.password)
  }

  render() {


    return (
		<div className="row login-container col-xs-12 col-sm-6 col-sm-offset-3 center-block">
			<div className="row">
				<img src={require("../images/app_logo.png")} 
					 alt={"logo"} 
					 className="appLogo" />
			<p className="transparentText"> Welcome Back </p>
			<hr />
			</div>
			<div className="row">
				<form onSubmit={this.handleSubmit.bind(this)}>
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
					<NavLink to="/SignUp" onlyActiveOnIndex className="transparentButtonText">New Here?</NavLink>
					<input type="submit"
						   className="primaryButtonText"
						   value="Login" />
					
					</div>
				</form>

			</div>
		</div>
      

    );

  }
}

export default Login;


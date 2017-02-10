import React, { Component } from 'react';
import NavLink from './NavLink';
import { hashHistory } from 'react-router'
import { checkauth } from './auth'
import '../styles/dashboard.css'

class Dashboard extends Component {
  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      showForm: false,
      loggedin: false,
      user: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };
  }
  componentWillMount(){
    checkauth(this)
    this.props.verifyuid(this.props.firebase.auth().currentUser.uid)

  
console.log('this email', this.props.firebase.auth().currentUser)
}
  goToOrder(e){
  	hashHistory.push('/Order')
    e.preventDefault();
  }

  goToOrderHistory(e){
  	hashHistory.push('/order-history')
    e.preventDefault();
  }

  goToAccount(e){
  	hashHistory.push('/Account')
    e.preventDefault();
  }
  goToFAQ(e){
  	hashHistory.push('/FAQ')
    e.preventDefault();
  }



  render() {
  	const html = (this.state.showForm)?
  		(
			<div>
			<div className="col-sm-4" onClick={this.goToOrderHistory}>
				<img src={require("../images/timer.png")} 
				 alt={"logo"} 
				 className="dashlogo" />
				<p className="transparentButtonText">Order History</p>
			</div>
			<div className="col-sm-4" onClick={this.goToOrder}>
				<img src={require("../images/calendar.png")} 
				 alt={"logo"} 
				 className="dashlogo" />
				<p className="transparentButtonText">Order</p>
			</div>
			<div className="col-sm-4" onClick={this.goToAccount}>
				<img src={require("../images/account_icon.png")} 
				 alt={"logo"} 
				 className="dashlogo" />
				<p className="transparentButtonText">Account</p>
			<hr />
			</div>
			<div className="">
			<input type="submit"
				   onClick={this.goToFAQ}
				   className="signUpButtonText"
				   value="FAQ" />
			</div>
			</div>
		):
		(
			<div>
			<p> You are not logged in. Go here to login: </p>
			<NavLink to="/Login" onlyActiveOnIndex className="transparentButtonText">Login</NavLink>
			</div>
			)
    return (
		<div className="row dashboard-container center-block col-sm-12">
			<div className="row dashboard-logo">
				<img src={require("../images/logo_name.png")} 
					 alt={"logo"} 
					 className="appLogoName" />
			    
			</div>
			<div className="row">
			<p className="transparentText"> DASHBOARD </p>
						<hr />
				{html}	
			</div>
		</div>
    );

  }
}

export default Dashboard;


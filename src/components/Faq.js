import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import '../styles/dashboard.css'

class Dashboard extends Component {
  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      user: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: ''
    };
  }

  goToOrder(e){
  	hashHistory.push('/Order')
    e.preventDefault();
  }

  goToOrderHistory(e){
  	hashHistory.push('/OrderHistory')
    e.preventDefault();
  }

  goToAccount(e){
  	hashHistory.push('/Account')
    e.preventDefault();
  }



  render() {


    return (
		<div className="row dashboard-container center-block col-sm-12">
			<div className="row dashboard-logo">
				<img src={require("../images/logo_name.png")} 
					 alt={"logo"} 
					 className="appLogoName" />
			    
			</div>
			<div className="row">
			<p className="transparentText"> FAQ </p>
						<hr />

					
			</div>
		</div>
      

    );

  }
}

export default Dashboard;

import React, { Component } from 'react';
import NavLink from './NavLink';
import Order from './Order';
import { hashHistory } from 'react-router'
import '../styles/dashboard.css'

class Confirmation extends Component {
 constructor(props){ 
  super(props);
    
   this.state = {
   	instructions: '',
   }
  }

 componentWillMount(){
  const userData = this.props.firebase.auth().currentUser
  this.setState({
  	startDate: this.props.startDate,
    endDate: this.props.endDate,
    pickupTime: this.props.pickupTime,
    dropoffTime: this.props.dropoffTime,
    uid: this.props.uid


   })
setTimeout(() =>
   console.log('what is on confrimation', 
   				this.state.uid,
   				this.state.startDate, 
   				this.state.endDate, 
   				this.state.pickupTime,
   				this.state.dropoffTime),1000)
  }
 
  componentDidMount() {

	}


  onSubmit(){
  	this.props.firebase.database()
  	.ref('/users/'+this.props.uid+'/orders/'+Math.floor(Date.now() / 1000))
  	.set({
  		pickupDate: this.state.startDate,
        pickupTime: this.state.pickupTime,
        dropoffDate: this.state.endDate,
        dropoffTime: this.state.dropoffTime,
        specialInstructions: this.state.instructions
  	});
  	alert('Thanks! Order Confirmed')

  	hashHistory.push('/Dashboard')

  }


  render() {

    return (
		<div className="row confirmation-container center-block col-sm-12">
			<div className="row">
				<img src={require("../images/process.png")} 
					 alt={"logo"} 
					 className="appProcessName" />
			    
			</div>
			<div className="row">
			<p className="transparentText"> ORDER HISTORY </p>
						<hr />
			</div>
			<div className="row">
				<div className="col-sm-12">
					<div className="form-group">
						<textarea rows="5" 
								  className="form-control"
								  value={this.state.value}
								  onChange={ (instructions)=>this.setState({instructions: instructions.target.value})}
								  placeholder="Please put any specific instructions here" >
						    	
						</textarea>
					</div>
				
				<div className="col-sm-12 confirmation-order">
					<p>We'll pick up your order at { this.state.pickupTime } on { this.state.startDate } </p>
					<p>We'll drop off your order at { this.state.dropoffTime } on { this.state.endDate } </p>
				</div>
				<div className="row col-sm-12">
					<button onClick={this.onSubmit.bind(this)}
						   className="signUpButtonText">
						   Confirm Order</button>
				</div>
				</div>			
				<hr />	
				<div className="loginInstead">	
					<NavLink to="/Dashboard" onlyActiveOnIndex className="transparentButtonText">Back to DashBoard</NavLink>
				</div>


		
		</div>
        </div>

    );

  }
}

export default Confirmation;


import React, { Component } from 'react';
import '../styles/dashboard.css'
import { hashHistory } from 'react-router'
import NavLink from './NavLink';
class Account extends Component {
  constructor(props){
    super(props);
       this.state = {
        loading: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',        
        // firstName: this.snap.firstName,
        // lastName: this.props.lastName,
        // email: this.props.email,
        // phoneNumber: this.props.phoneNumber,
        // address1: this.props.address1,
        // address2: this.prop.address2,
        // city: this.props.city,
        // state: this.props.state,
        // zip: this.props.zip
       }
  }

   componentWillMount(){ //set up new component when page is going to load with the following properties set.
    this.props.firebase
    .database()
    .ref('/users/' + this.props.uid)
    .once('value')
    .then((snapshot)=> {
     let snap = snapshot.val();
       this.setState({
        firstName: snap.firstName,
        lastName: snap.lastName,
        email: snap.email,
        phoneNumber: snap.phoneNumber,
        address1: snap.location.address1,
        address2: snap.location.address2,
        city: snap.location.city,
        state: snap.location.state,
        zip: snap.location.zip
       })

     })
    console.log(this.props.firebase)
    console.log(this.state.zip)
    }



  edit(e){
  	e.preventDefault()
  	this.props.firebase.database()
  	.ref('/users/'+ this.props.uid)
  	.update({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber
          });
    this.props.firebase.database()
    .ref('/users/'+this.props.uid+'/location/')
    .update({
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
              });
    alert('profile updated')
    hashHistory.push('/Account')
  }

  goToPayment(e){
  	e.preventDefault()
  	alert('payment')
  }

//add divs to render to small listing all @100%
  render() {
    return (
		<div className="row dashboard-container center-block col-sm-12">
			<div className="row dashboard-logo">
				<img src={require("../images/logo_name.png")} 
					 alt={"logo"} 
					 className="appLogoName" />
			    
			</div>
			<div className="row">
			<p className="transparentText"> ACCOUNT </p>
						<hr />
					<form onSubmit={this.edit.bind(this)}>
					<div className="row">
						<div className="col-sm-12">
							<div className="col-sm-6">
							<input type="text" 
								   className="accountButton"
								   onChange={ (text)=>this.setState({firstName: text.target.value}) }
								   value={ this.state.firstName }
								   placeholder={" First Name"} />
						    </div>
						    <div className="col-sm-6">
						    <input type="text" 
						    	   className="accountButton"
								   onChange={ (text)=>this.setState({lastName: text.target.value}) }
								   value={ this.state.lastName }
								   placeholder={" Last Name"} />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<div className="col-sm-6">
							<input type="text" 
								   className="accountButton"
								   onChange={ (text)=>this.setState({email: text.target.value}) }
								   value={ this.state.email }
								   placeholder={" Email Address"} />
						    </div>
							<div className="col-sm-6">
						    <input type="text" 
						    	   className="accountButton"
								   onChange={ (text)=>this.setState({phoneNumber: text.target.value}) }
								   value={ this.state.phoneNumber }
								   placeholder={" Phone Number"} />
							</div>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-sm-12">
								<div className="col-xs-9">
								    <input type="text" 
								    	   className="accountButton"
										   onChange={ (text)=>this.setState({address1: text.target.value}) }
										   value={ this.state.address1 }
										   placeholder={" Address"} />
								</div>
								<div className="col-xs-3">
								    <input type="text" 
								    	   className="accountButton"
										   onChange={ (text)=>this.setState({address2: text.target.value}) }
										   value={ this.state.address2 }
										   placeholder={" Address 2"} />	
								</div>	
						</div>				
					</div>	
					<div className="row">
						<div className="col-sm-12">
								<div className="col-sm-7 col-xs-12">
								    <input type="text" 
								    	   className="accountButton"
										   onChange={ (text)=>this.setState({city: text.target.value}) }
										   value={ this.state.city }
										   placeholder={" City"} />
								</div>
								<div className="col-sm-2 col-xs-4">
								    <input type="text" 
								    	   className="accountButton"
										   onChange={ (text)=>this.setState({state: text.target.value}) }
										   value={ this.state.state }
										   placeholder={" State"} />
								</div>
								<div className="col-sm-3 col-xs-8">	
								    <input type="text" 
								    	   className="accountButton"
										   onChange={ (text)=>this.setState({zip: text.target.value}) }
										   value={ this.state.zip }
										   placeholder={" Zip Code"} />	
								</div>
						</div>				
					</div>	
															
					<div className="row">
					<input type="submit"
						   className="signUpButtonText"
						   value="Edit" />
					</div>
					<hr />															
				</form>
					<div className="row">
					<input type="submit"
						   onClick={this.goToPayment}
						   className="signUpButtonText"
						   value="Payment" />
					</div>				
					<hr />	
					<div className="loginInstead">	
					<NavLink to="/Dashboard" onlyActiveOnIndex className="transparentButtonText">Back to Dashboard</NavLink>
					</div>
			</div>
		</div>
      

    );

  }
}

export default Account;


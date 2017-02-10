import React, { Component } from 'react';
import Timepicker from 'react-timepicker';
import { DateRangePicker } from 'react-dates';
import { hashHistory } from 'react-router';
import NavLink from './NavLink';
import moment from 'moment'
import '../styles/dashboard.css'
import '../../node_modules/react-timepicker/timepicker.css'
import '../../node_modules/react-dates/lib/css/_datepicker.css';

class Order extends Component {
  constructor(props){
    super(props);
    // We have the same props as in our signup.js file and they serve the same purposes.
    this.state = {
      user: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: '',
      focusedInput: null,
      startDate: null,
      endDate: null,
      pickupTime: '',
      dropoffTime: '',

    };
  }
  componentDidMount(){
      if (this.props.firebase.auth().currentUser) {
      
      this.setState({
        showForm: true,
        user: ''
      });
          

    // console.log('loggedin', this.props.firebase.auth())

  }
// console.log('this email', this.props.firebase.auth().currentUser)
}
  onSubmit(e){
  	hashHistory.push('/Confirmation')
    e.preventDefault();
    this.props.putInOrder(moment(this.state.startDate).format('LL'), 
    					            moment(this.state.endDate).format('LL'),
    					  moment(this.state.pickupTime, 'hmm').format('h:mm a'), 
    					  moment(this.state.dropoffTime, 'hmm').format('h:mm a'))
    console.log('order state: ', 
    	moment(this.state.startDate).format('LL'),
    	moment(this.state.endDate).format('LL'),
    	this.state.pickupTime,
    	this.state.dropoffTime,
      this.state.focusedInput)


  }



  render() {
  	  const { focusedInput, startDate, endDate } = this.state;

    return (
		<div className="row dashboard-container center-block col-sm-12">
			<div className="row dashboard-logo">
				<img src={require("../images/logo_name.png")} 
					 alt={"logo"} 
					 className="appLogoName" />
			    
			</div>
			<div className="row">
			<p className="transparentText"> ORDER </p>
						<hr />
			</div>
			<div className="row">
				<div className="col-sm-12 date-container">
				        <DateRangePicker orientation
				          {...this.props}
				          orientation="vertical"
				          onDatesChange={ ({startDate, endDate}) => { this.setState({startDate, endDate}) }}
				          onFocusChange={ (focusedInput) => { this.setState({ focusedInput }); }}
				          focusedInput={focusedInput}
				          startDate={startDate}
				          endDate={endDate}
				        />

				</div>
				<div className="col-sm-12 time-container">
					<div className="col-sm-6">
						<Timepicker onChange={ (hours, minutes) => { this.setState({pickupTime: hours+''+minutes}) } }/>
					</div>		
					<div className="col-sm-6">
						<Timepicker onChange={ (hours, minutes) => { this.setState({dropoffTime: hours+''+minutes}) }} />
					</div>
				</div>
					<div className="row">
					<button onClick={this.onSubmit.bind(this)}
						   className="signUpButtonText">
						   Confirm Order</button>
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

export default Order;


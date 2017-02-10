import React, { Component } from 'react';
import { firebase, ref, firebaseAuth, db, firebaseListToArray } from './utils/firebase';
import loginbutton from './components/loginbutton'
import logoutbutton from './components/logoutbutton'
import Nav from './components/Nav'
import Home from './components/Home';

export default class App extends Component {

  constructor(props) {
      super(props);
      
      this.state = {
        user: '',
        uid: '',
        // firstName: '',
        // lastName: '',
        // email: '',
        // password: '',
        // phoneNumber: '',
        // address1: '',
        // address2: '',
        // city: '',
        // state: '',
        // zip: '',
        focusedInput: null,
        startDate: null,
        endDate: null,
        pickupTime: null,
        dropoffTime: null
      }    
  }

  putInOrder(startDate, endDate, pickupTime, dropoffTime){
    this.setState({
      startDate: startDate,
      endDate: endDate,
      pickupTime: pickupTime,
      dropoffTime: dropoffTime
    })
      
  } 

  verifyuid(uid){
    this.setState({
      uid: uid
    })
  }


  render() {

    const newChildren = React.cloneElement(this.props.children, {
     //pass through functions
      putInOrder: this.putInOrder.bind(this),
      verifyuid: this.verifyuid.bind(this),
     //order info 
      pickupTime: this.state.pickupTime,
      dropoffTime: this.state.dropoffTime,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
     //user record 
      uid: this.state.uid,
     //modules
      firebase: firebase,
      ref: ref,
      firebaseAuth: firebaseAuth,
      firebaseListToArray: firebaseListToArray,
      db: db
    });

    return  (
      <div className="container center-block">
          <Nav />

          <div className="content">
            { newChildren || <Home /> }
          </div>
        </div>
    );
  }
}


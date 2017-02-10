import React, { Component } from 'react';
import NavLink from './NavLink';
import Order from './Order';
import { hashHistory } from 'react-router'
import '../styles/dashboard.css'

class OrderHistory extends Component {
 constructor(props){ 
  super(props);
    
   this.state = {
    orderData: []
   }
  }

 componentWillMount(){
      this.props.firebase
      .database()
      .ref('/users/' + this.props.uid +'/orders/')  //targets the branch unique to the logged in users orders branch 
      .once('value') //reads database payload once on pageload (doesnt stay open as it did with .on)
      .then((snapshot)=>{
        let snap = snapshot.val();
        const results = this.props.firebaseListToArray(snap); //firebaseListToArray function iterates through the firebase payload object, converting it into an array so we can iterate through it

        this.setState({
          orderData: results //orderData set to the array of order objects inside the payload
        })
      })
  }


  render() {
    const orderHistory = this.state.orderData.map(order => {
      return (<div key={ order.id }>
                <p>Order number: { order.id }</p>
                <p>Pickup date: {order.pickupDate} at {order.pickupTime }</p>
                <p>Drop off date: {order.dropoffDate} at {order.dropoffTime}</p>
              <hr />
              </div>
            )
    });
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

        <div className="col-sm-12 confirmation-order">

        { orderHistory.reverse() }

        </div>

        </div>      
        <hr />  
        <div className="loginInstead">  
          <NavLink to="/Dashboard" onlyActiveOnIndex className="transparentButtonText">Back to Dashboard</NavLink>
        </div>


    
    </div>
        

    );

  }
}


export default OrderHistory;


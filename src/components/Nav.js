import React, { Component } from 'react';
import { firebase } from '../utils/firebase'
import NavLink from './NavLink';
import logoutbutton from './logoutbutton'

class Nav extends Component {

  sessionButton(){
    if (!firebase.auth().currentUser) {
      return <li><NavLink to="/Login" onlyActiveOnIndex>Login</NavLink></li>
    } else {
      return <logoutbutton>Log Out</logoutbutton>
    }
  }
  render() {

    return (
 		<div className="header">
		  <div className="navbar-header col-sm-6 col-xs-8">
		   <img src={require("../images/logo_name.png")} alt={"logo"} className="" />

		  </div>
		  <nav className="col-sm-6 col-xs-4">
		    <ul>
		        { this.sessionButton() }
			</ul>
		  </nav>
		</div>
    );
 
  }
}

export default Nav;
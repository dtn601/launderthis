import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import { logout } from './auth';

class logoutbutton extends Component {

  handleClick(e) {
    e.preventDefault();
    
    logout()
  }

  render() {
    return (
      <button
        onClick={ this.handleClick.bind(this) }
        className="btn">{ this.props.children }</button>
    )
  }
}

export default logoutbutton;

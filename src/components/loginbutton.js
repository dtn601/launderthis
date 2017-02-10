import React, { Component } from 'react';
import { hashHistory } from 'react-router'

class loginbutton extends Component {
  handleClick(e) {
    e.preventDefault();
    hashHistory.push('/Login')
  }

  render() {
    return (
      <button onClick={ this.handleClick.bind(this) }
        className="btn">{ this.props.children }</button>
    )
  }
}

export default loginbutton;


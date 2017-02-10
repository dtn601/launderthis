import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { firebase } from './utils/firebase';
import dotenv from 'dotenv';
import './index.css'
dotenv.config({ silent: true })

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import Order from './components/Order';
import Confirmation from './components/Confirmation';
import OrderHistory from './components/OrderHistory';
import FAQ from './components/Faq';
import './index.css';



ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>

      <IndexRoute component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/signup" component={ Signup } />
      <Route path="/dashboard" component={ Dashboard } />
      <Route path="/account" component={ Account } />
      <Route path="/order" component={ Order } />
      <Route path="/confirmation" component={ Confirmation } />
      <Route path="/order-history" component={ OrderHistory } />
      <Route path="/FAQ" component={ FAQ } />
    </Route>
  </Router>,

  document.getElementById('root')
);

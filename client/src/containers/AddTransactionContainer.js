import React, { Component } from 'react';
import { NavLink,
  BrowserRouter as Router,
  Route, } from 'react-router-dom';
import ChooseTransactionComponent from '../components/ChooseTransactionComponent'
import AddTransactionComponent from './AddTransactionComponent'

import '../css/AddTransaction.css';

class AddTransactionContainer extends Component {
  render() {
    return(
        <Router>
          <ChooseTransactionComponent />
          <Route
            exact path="/debit"
            component={AddTransactionComponent} />
          <Route
            exact path="/credit"
            component={AddTransactionComponent} />
        </Router>
    )
  }
}

export default AddTransactionContainer

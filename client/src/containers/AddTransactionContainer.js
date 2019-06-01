import React, { Component } from 'react';
import { NavLink,
  BrowserRouter as Router,
  Route, } from 'react-router-dom';
import AddTransactionComponent from './AddTransactionComponent'
import '../css/AddTransaction.css';
import './TransactionInput';

class ChooseTransactionContainer extends Component {
  render() {
    return(
      <div className="AddTransaction">
        <Router>
          <Route
            exact path="/debit"
            component={AddTransactionComponent} />
          <Route
            exact path="/credit"
            component={AddTransactionComponent} />
        </Router>
      </div>




    )
  }
}

export default ChooseTransactionContainer

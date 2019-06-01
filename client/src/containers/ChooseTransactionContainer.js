import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/AddTransaction.css';
import './TransactionInput';

class AddTransactionContainer extends Component {
  render() {
    return(
      <>
        <div className="AddTransaction">
          <NavLink to="/debit" className="transaction-link">+ Add a Deposit</NavLink>
        </div>
        <div className="AddTransaction">
          <NavLink to="/credit" className="transaction-link">
            + Add a Payment
          </NavLink>
        </div>
      </>

    )
  }
}

export default AddTransactionContainer

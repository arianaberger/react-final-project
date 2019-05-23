import React, { Component } from 'react';
import '../css/AddTransaction.css';
import './TransactionInput';

class AddTransactionContainer extends Component {
  render() {
    return(
      <>
        <div className="AddTransaction">
          <a href="#" className="transaction-link">+ Add a Deposit</a>
        </div>
        <div className="AddTransaction">
          <a href="#" className="transaction-link">+ Add a Payment</a>
        </div>
      </>

    )
  }

}

export default AddTransactionContainer

import { NavLink } from 'react-router-dom';

import React, { Component } from 'react';

class ChooseTransactionComponent extends Component {
  render() {
    return(
      <>
      <div className="AddTransaction">
        <NavLink to="addtransaction/debit" className="transaction-link">+ Add a Deposit</NavLink>
      </div>
      <div className="AddTransaction">
        <NavLink to="addtransaction/credit" className="transaction-link">
          + Add a Payment
        </NavLink>
      </div>
      </>
    )
  }
}

export default ChooseTransactionComponent

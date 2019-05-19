import React, { Component } from 'react';
import '../css/AddTransaction.css';

const funds = [
  {
    name: "Treat Yourself",
    amount: 500
  },
  {
    name: "Give to Others",
    amount: 400
  },
  {
    name: "Big Purchases",
    amount: 600
  },
  {
    name: "Savings",
    amount: 1000
  }
]

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

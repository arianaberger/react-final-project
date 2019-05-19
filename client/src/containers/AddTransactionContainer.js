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
          + Add a Deposit
        </div>
        <div className="AddTransaction">
          + Add a Payment
        </div>
      </>

    )
  }

}

export default AddTransactionContainer

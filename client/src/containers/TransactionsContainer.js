import React from 'react';
import '../css/Accounts.css';

const TransactionsContainer = (props) => (
  <div className="wrapper">
  {props.transactions.map(transaction =>
    <div key={transaction.id}>
      <h4>Counterparty: {transaction.counterparty}</h4>
      <p>Date: {transaction.date}</p>
      <h5>${transaction.amount}</h5>
      <button onClick={() => props.onDeleteClick(transaction.id)}>[Remove]</button>
    </div>
    )}
  </div>
)

export default TransactionsContainer;

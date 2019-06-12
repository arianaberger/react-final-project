import React from 'react';
import '../css/Accounts.css';

const TransactionsContainer = (props) => (
  <div className="wrapper">
  {props.transactions.map(transaction =>
    <div key={transaction.id}>
      <h4>Counterparty: {transaction.counterparty}</h4>
      <p>Date: {transaction.date}</p>
      <h5>${transaction.amount}</h5>
      {props.account_id === 1 ? null : <button onClick={() => props.onDeleteClick(transaction)}>[Remove]</button>}
    </div>
    )}
  </div>
)

export default TransactionsContainer;

import React from 'react';
import '../css/Accounts.css';
import {Button} from 'react-bootstrap';

const TransactionsContainer = (props) => (
  <div className="wrapper">
  {props.transactions.map(transaction =>
    <div className="TransactionContainer">
      <div key={transaction.id} className="Transaction1">
        <h5>{transaction.counterparty}</h5>
        <p>{transaction.date}</p>
      </div>
      <div className="Transaction2">
        <h5>${transaction.amount}</h5>
      </div>
      <div className="Transaction3">
        {props.account_id === 1 ? null : <Button variant="outline-secondary" size="sm" onClick={() => props.onDeleteClick(transaction)}>x</Button>}
      </div>
    </div>
    )}
  </div>
)

export default TransactionsContainer;

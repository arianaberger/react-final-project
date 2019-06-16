import React from 'react';
import '../css/Accounts.css';
import {Button} from 'react-bootstrap';
import format from 'accounting-js';

const TransactionsContainer = (props) => (
  <div className="wrapper">
  {props.transactions.map(transaction =>
    <div className="TransactionContainer">
      <div key={transaction.id} className="Transaction1">
        <h5>{transaction.counterparty}</h5>
        <p>{transaction.date}</p>
      </div>

      <div className="Transaction2">
      {transaction.debit ?
        <h5>{format.formatMoney(transaction.amount)}</h5> :
        <h5 className="credit">{format.formatMoney(transaction.amount)}</h5>}
      </div>

      <div className="Transaction3">
        {props.account_id === 1 ? null : <Button variant="outline-secondary" size="sm" onClick={() => props.onDeleteClick(transaction)}>X</Button>}
      </div>
    </div>
  )}
  </div>
)

export default TransactionsContainer;

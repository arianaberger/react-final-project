import React from 'react';
import {Button} from 'react-bootstrap';
import format from 'accounting-js';
import Moment from 'react-moment';

const TransactionsContainer = (props) => (
  <>
    {props.transactions.map(transaction => {
      return (
        <div className="transaction-container" key={transaction.id}>

          <div key={transaction.id} className="transaction1">
            <h5>{transaction.counterparty}</h5>
            <p className="date-format"><Moment format="MMM DD, YYYY">{transaction.date}</Moment></p>
          </div>

          <div className="transaction2">
          {transaction.debit ?
            <h5>{format.formatMoney(transaction.amount)}</h5> :
            <h5 className="credit">{format.formatMoney(transaction.amount)}</h5>}
          </div>

          <div className="transaction3">
            {props.account_id === 1 ? null : <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => props.onDeleteClick(transaction)}>
              X
            </Button>}
          </div>
        </div>
      )}
    )}
</>
)

export default TransactionsContainer;

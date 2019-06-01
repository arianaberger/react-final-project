import React from 'react';
import '../css/Accounts.css';
import AccountForm from './AccountForm'

const Accounts = (props) => (
  <div className="wrapper">
    {props.accounts.map(account =>
      <div className='Accounts' key={account.id}>
        <h3>{account.name}</h3>
        <h1>${account.amount}123</h1>
        <AccountForm accountId={account.id} />
      </div>
    )}
  </div>
)

export default Accounts;

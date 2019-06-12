import React from 'react';
import '../css/Accounts.css';
import { NavLink } from 'react-router-dom';
import AccountForm from '../containers/AccountForm'

const Accounts = (props) => (
  <div className="wrapper">
    {props.accounts.map(account =>
      <div className='Accounts' key={account.id}>
        <NavLink to={`/accounts/${account.id}`}><h3>{account.name}</h3></NavLink>
        <h1>${account.account_total}</h1>
        <AccountForm accountId={account.id} />
      </div>
    )}
  </div>
)

export default Accounts;

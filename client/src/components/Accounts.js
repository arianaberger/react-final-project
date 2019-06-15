import React from 'react';
import '../css/Accounts.css';
import { NavLink } from 'react-router-dom';
import AccountForm from '../containers/AccountForm'


const Accounts = (props) => (
  <div className="AccountWrapper">
    {props.accounts.map(account =>
      <div className='Accounts' key={account.id}>
        <div className="AccountBuffer"></div>
        <div className="AccountName">
          <NavLink to={`/accounts/${account.id}`}><h3>{account.name}</h3></NavLink>
        </div>
        <div className="AccountTotal">
          <h1>${account.account_total}</h1>
        </div>
        <div className="AccountBuffer"></div>
        {props.update ? <AccountForm accountId={account.id} /> : null}
      </div>
    )}
  </div>
)

export default Accounts;

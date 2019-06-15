import React from 'react';
import '../css/Accounts.css';
import { NavLink } from 'react-router-dom';
import AccountForm from '../containers/AccountForm'
import format from 'accounting-js';
import edit from '../images/edit.png'

const Accounts = (props) => (
  <div className="AccountWrapper">
    {props.accounts.map(account =>
      <div className='Accounts' key={account.id}>
        <div className="AccountName">
          <NavLink to={`/accounts/${account.id}`}><h3>{account.name}</h3></NavLink>
        </div>
        <div className="AccountTotal">
          <h2>{format.formatMoney(account.account_total)}</h2>
        </div>
        <div className="AccountEdit">
          {account.id != 1 ? <img src={edit} alt="edit"/> : null}
        </div>
        {props.update ? <AccountForm accountId={account.id} /> : null}
      </div>
    )}
  </div>
)

export default Accounts;

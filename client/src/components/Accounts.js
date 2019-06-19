import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountForm from '../containers/AccountForm'
import format from 'accounting-js';
import edit from '../images/edit.png';
import AccountComponent from './AccountComponent';

const Accounts = (props) => (
  <div className="AccountWrapper">
    <div className="Accounts">
      <div className="AccountsHeader">ACCOUNT NAME</div>
      <div className="AccountsHeader">ACCOUNT BALANCE</div>
      <div className="AccountsEditHeader">EDIT</div>

      {props.accounts.map(account => {
        return <AccountComponent account={account} />
      }

    </div>
  </div>
)

export default Accounts;

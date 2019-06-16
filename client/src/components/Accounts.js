import React from 'react';
import '../css/Accounts.css';
import { NavLink } from 'react-router-dom';
import AccountForm from '../containers/AccountForm'
import format from 'accounting-js';
import edit from '../images/edit.png'

const Accounts = (props) => (
  <div className="AccountWrapper">
    <div className="Accounts">
      {props.accounts.map(account =>
        <div className="AccountInfo" key={account.id}>
          <div className="AccountName">
          {props.state.update && account.id === props.state.id ? <AccountForm accountId={account.id} handleFormSubmit={props.handleFormSubmit}/> : <NavLink to={`/accounts/${account.id}`}><h3>{account.name}</h3></NavLink>}
          </div>
          <div className="AccountTotal">
            <h2>{format.formatMoney(account.account_total)}</h2>
          </div>
          <div className="AccountEdit">
            {account.id != 1 ? <img src={edit} alt="edit" onClick={() => props.handleOnClick(account.id)}/> : null}
          </div>
        </div>
      )}
    </div>
  </div>
)

export default Accounts;

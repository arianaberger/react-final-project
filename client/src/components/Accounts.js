import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountForm from '../containers/AccountForm'
import format from 'accounting-js';
import edit from '../images/edit.png'

const Accounts = (props) => (
  <div className="AccountWrapper">
    <div className="Accounts">
      <div className="AccountsHeader">ACCOUNT NAME</div>
      <div className="AccountsHeader">ACCOUNT BALANCE</div>
      <div className="AccountsEditHeader">EDIT</div>

      {props.accounts.map(account => {
        return (
        <div key={account.id}>
          <div className="AccountName">
          {props.state.update && account.id === props.state.id ?
            <AccountForm account_id={account.id}
              account_name={account.name}
              handleFormSubmit={props.handleFormSubmit}/> :
            <NavLink to={`/accounts/${account.id}`}><h3>{account.name}</h3></NavLink>}
          </div>
          <div className="AccountTotal">
            <h3>{format.formatMoney(account.account_total)}</h3>
          </div>
          <div className="AccountEdit">
            {account.id !== 1 ? <img src={edit} alt="edit" className="edit-image" onClick={(event) => props.handleOnClick(event, account.id)} /> : null}
          </div>
        </div>
      )}
      )}
    </div>
  </div>
)

export default Accounts;

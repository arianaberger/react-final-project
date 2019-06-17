import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountForm from '../containers/AccountForm'
import format from 'accounting-js';
import edit from '../images/edit.png'

const Accounts = (props) => (
  <>
    <div className="AccountName">
    {props.state.update && props.account.id === props.state.id ?
      <AccountForm account_id={props.account.id}
        account_name={props.account.name}
        handleFormSubmit={props.handleFormSubmit}/> :
      <NavLink to={`/accounts/${props.account.id}`}><h3>{props.account.name}</h3></NavLink>}
    </div>
    <div className="AccountTotal">
      <h3>{format.formatMoney(props.account.account_total)}</h3>
    </div>
    <div className="AccountEdit">
      {props.account.id !== 1 ? <a href='#' onClick={(event) => props.handleOnClick(event, props.account.id)}><img src={edit} alt="edit" className="edit-image" /></a> : null}
    </div>
  </>
)

export default Accounts;

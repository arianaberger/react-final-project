import React from 'react';
import '../css/Accounts.css';
import format from 'accounting-js';

const AccountTotal = (props) => (
  <>
  <div className="AccountWrapper">
    <div className="TotalBalanceHeader"><h5>TOTAL BALANCE</h5></div>
    <div className="TotalBalance"><h3>{format.formatMoney(props.total)}</h3></div>
  </div>
  </>
)

export default AccountTotal;

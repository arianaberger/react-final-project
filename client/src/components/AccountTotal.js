import React from 'react';
import '../css/Accounts.css';
import format from 'accounting-js';

const AccountTotal = (props) => (
  <div className="AccountTotalWrapper">
    <h3>Total Balance: {format.formatMoney(props.total)}</h3>
  </div>
)

export default AccountTotal;

import React from 'react';
import format from 'accounting-js';

const AccountTotal = (props) => (
  <div className="AccountWrapper">
    <div>
      <div className="TotalBalanceHeader"><h5>TOTAL BALANCE</h5></div>
      <div className="TotalBalance"><h3>{format.formatMoney(props.total)}</h3></div>
    </div>
  </div>
)

export default AccountTotal;

import React from 'react';
import format from 'accounting-js';

const AccountTotal = (props) => (
  <div className="account-wrapper">
    <div>
      <div className="total-balance-header"><h5>TOTAL BALANCE</h5></div>
      <div className="total-balance"><h3>{format.formatMoney(props.total)}</h3></div>
    </div>
  </div>
)

export default AccountTotal;

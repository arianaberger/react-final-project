import React from 'react';
import '../css/Accounts.css';

const AccountTotal = (props) => (
  <div className="wrapper">
    Total Balance: ${props.total}
  </div>
)

export default AccountTotal;

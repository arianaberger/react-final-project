import React from 'react';
import '../css/Funds.css';
import AccountForm from './AccountForm'

const Funds = (props) => (
  <div className="wrapper">
    {props.funds.map(fund =>
      <div className='Fund' key={fund.id}>
        <h3>{fund.name}</h3>
        <h1>${fund.amount}123</h1>
        <AccountForm fundId={fund.id} />
      </div>
    )}
  </div>
)

export default Funds;

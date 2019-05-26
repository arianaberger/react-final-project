import React from 'react';
import '../css/Funds.css';

const Funds = (props) => (
  <div className="wrapper">
    {props.funds.map(fund =>
      <div className='Fund' key={fund.id}>
        <h3>{fund.name}</h3>
        <h1>${fund.amount}123</h1>
        Link to Edit
      </div>
    )}
  </div>
)

export default Funds;

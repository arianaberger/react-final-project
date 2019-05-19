import React, { Component } from 'react';
import Funds from './Funds'


const funds = [
  {
    name: "Treat Yourself",
    amount: 500
  },
  {
    name: "Give to Others",
    amount: 400
  },
  {
    name: "Big Purchases",
    amount: 600
  },
  {
    name: "Savings",
    amount: 1000
  }
]

class FundsContainer extends Component {
  render() {
    return(
      <Funds funds={funds} />
    )
  }

}

export default FundsContainer

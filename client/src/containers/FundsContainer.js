import React, { Component } from 'react';
import Funds from './Funds'

class FundsContainer extends Component {
  render() {
    console.log("FundsContainer props are:", this.props.funds)
    return(
      <Funds funds={this.props.funds} />
    )
  }

}

export default FundsContainer

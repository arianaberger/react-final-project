import React, { Component } from 'react';
import Funds from './Funds'

class FundsContainer extends Component {
  render() {
    return(
      <Funds funds={this.props.funds} />
    )
  }

}

export default FundsContainer

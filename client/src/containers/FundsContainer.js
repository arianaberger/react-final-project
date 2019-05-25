import React, { Component } from 'react';
import Funds from './Funds';
import { connect } from 'react-redux';

class FundsContainer extends Component {
  render() {
    console.log("FundsContainer props are:", this.props.accounts)
    return(
      <Funds funds={this.props.accounts} />
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    accounts: state.accounts
  })
}
export default connect(mapStateToProps)(FundsContainer)

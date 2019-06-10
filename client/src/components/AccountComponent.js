import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccount } from '../actions/accounts';

class AccountComponent extends Component {


  render() {
    return(
      <>
      "hello"
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    account: state.accounts.account
  })
}

export default connect(mapStateToProps, { getAccount })(Component);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccount } from '../actions/accounts';

class AccountComponent extends Component {

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.getAccount(id)
  }

  render() {
    console.log("Account is:", this.props.account)
    return(
      "hello"
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    account: state.accounts.account
  })
}

export default connect(mapStateToProps, { getAccount })(AccountComponent)

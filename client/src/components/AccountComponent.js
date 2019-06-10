import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccount } from '../actions/accounts'

class AccountComponent extends Component {

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.getAccount(id)
  }

  render() {
    console.log("Account transaction props:", this.props.accounts)
    return(
      "hello"
    )
  }
}

export default AccountComponent;

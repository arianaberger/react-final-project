import React, { Component } from 'react';
import { connect } from 'react-redux';
//Does resetAccountForm need to be imported?
import { updateAccountFormData } from '../actions/accountForm'
import { updateAccount } from '../actions/accounts'

class AccountForm extends Component {

  handleOnChange = event => {
    const currentAccountFormData = Object.assign({}, this.props.accountFormData, {
      name: event.target.value,
      id: this.props.accountId
    })
    this.props.updateAccountFormData(currentAccountFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updateAccount(this.props.accountFormData)
  }

  render() {
    const {account_name} = this.props.accountFormData

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Name:
            <input
              type="text"
              onChange={this.handleOnChange}
              name="account_name"
              value={account_name}
              />
          </label>
          <input type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accountFormData: state.accountFormData
  }
}

export default connect(mapStateToProps, {
  updateAccountFormData,
  updateAccount,
})(AccountForm)

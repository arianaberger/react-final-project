import React, { Component } from 'react';
import { connect } from 'react-redux';
//Does resetAccountForm need to be imported?
import { updateAccountFormData, resetAccountForm } from '../actions/accountForm'
import { updateAccount } from '../actions/accounts'

class AccountForm extends Component {

//Need to review what is going on here!
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
      .then(this.props.resetAccountForm)
  }

  render() {
    const {accountName} = this.props.accountFormData

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Name:
            <input
              type="text"
              onChange={this.handleOnChange}
              name="accountName"
              value={accountName}
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
  resetAccountForm
})(AccountForm)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccountFormData } from '../actions/accountForm'
import { updateAccount } from '../actions/accounts'

class AccountForm extends Component {

//Need to review what is going on here!
  handleOnChange = event => {
    const currentAccountFormData = Object.assign({}, this.props.accountFormData, {
      name: event.target.value,
      id: this.props.fundId
    })
    this.props.updateAccountFormData(currentAccountFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.props.AccountFormData)
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
  updateAccount
})(AccountForm)

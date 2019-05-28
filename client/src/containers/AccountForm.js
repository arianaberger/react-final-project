import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccountFormData } from '../actions/accountForm'
import { createAccount } from '../actions/accounts'

class AccountForm extends Component {

//Need to review what is going on here!
//Text reset after every letter entered if I keep 'name'!!
  handleOnChange = event => {
    const currentAccountFormData = Object.assign({}, this.props.accountFormData, {
      name: event.target.value
    })
    this.props.updateAccountFormData(currentAccountFormData)
  }

  handOnSubmit = event => {
    event.preventDefault();
    //Console log not working
    console.log("form submitted")
  }

  render() {
    const {accountName} = this.props.accountFormData

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlform="Name">Name:</label>
            <input
              type="string"
              onChange={this.handleOnChange}
              name="accountName"
              value={accountName}
              />
        </form>

        <button type="submit">
          Update
        </button>
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
  createAccount
})(AccountForm)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccountFormData } from '../actions/accountForm'
import { createAccount } from '../actions/accounts'

class AccountForm extends Component {

//Need to review what is going on here!
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentAccountFormData = Object.assign({}, this.props.accountFormData, {
      [name]: value
    })
    this.props.updateAccountFormData(currentAccountFormData)
  }

  handOnSubmit = event => {
    event.preventDefault();
    console.log("form submitted")
  }

  render() {
    const {name} = this.props.accountFormData

    return(
      <div>
        <form onSubmit={this.handOnSubmit}>
          <label htmlform="Name">Name:</label>
            <input
              type="string"
              onChange={this.handleOnChange}
              name="name"
              value={name}
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

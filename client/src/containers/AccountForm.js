import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccount } from '../actions/accounts'

class AccountForm extends Component {

  state = {
    id: 1,
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value,
      id: this.props.accountId
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.updateAccount(this.state);
    this.setState({
      name: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="account_name"
              value={this.state.name}
              />
          <input type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

export default connect(null, { updateAccount })(AccountForm)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccount } from '../actions/accounts'
import {Form, FormControl, FormGroup} from 'react-bootstrap';

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
    this.props.updateAccount(this.state);
    this.setState({
      name: '',
    })
    this.props.handleFormSubmit();
  }


  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.handleOnSubmit();
    }
  }

  render() {
    return(
      <div>
      <Form onSubmit={this.handleOnSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                name="account_name"
                value={this.state.name}
                onChange={this.handleOnChange}
                onKeyDown={this.onKeyDown}
               />
            </Form.Group>
        </Form>
      </div>
    )
  }
}

export default connect(null, { updateAccount })(AccountForm)

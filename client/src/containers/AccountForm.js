import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateAccount } from '../actions/accounts'
import { Form } from 'react-bootstrap';

class AccountForm extends Component {

  state = {
    id: this.props.account_id,
    name: this.props.account_name
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value,
    })
  }

  handleOnSubmit = () => {
    this.props.updateAccount(this.state);
    this.props.handleFormSubmit();
  }


  onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      if (event.target.value !== "") {
        this.handleOnSubmit();
      }
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

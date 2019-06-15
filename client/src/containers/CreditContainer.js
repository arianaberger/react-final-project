import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAccounts} from '../actions/accounts';
import { createTransaction } from '../actions/transactions'

import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CreditContainer extends Component {

  state = {
    authenticate: false,

    //Initial state for form
    amount: '',
    counterparty: '',
    date: new Date(),
    account_id: 1,
    parent_id: '',
    debit: false,
  }

  componentDidMount(){
    this.props.getAccounts()
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleDateChange(date) {
    this.setState({
      date: date
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createTransaction(this.state)
    this.setState({
      amount: '',
      counterparty: '',
      date: new Date(),
      account_id: 1,
      parent_id: '',
      debit: false,
      authenticate: true
    })
  }

  render() {
    const onChange = this.handleOnChange
    const {amount, counterparty, date} = this.state
    const accounts_list = this.props.accounts.map(account => {
      return <option value={account.id} key={account.id}>{account.name}</option>
    })

    //Redirect to accounts page when form is submitted
    if (this.state.authenticate === true) {
      return <Redirect to='/' />
    }

    //Render form
    return(
      <div>

      <Form onSubmit={this.handleOnSubmit}>

        <Form.Group controlId="formBasicAmount">
          <Form.Label>Amount:</Form.Label>
          <Form.Control
            type="text"
            name="amount"
            value={amount}
            onChange={onChange}
           />
        </Form.Group>

        </Form>

        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>Amount:
              <input
                type="text"
                name="amount"
                value={amount}
                onChange={onChange} />
            </label>
          </div>

          <div>
            <label>Institution:
              <input
                type="text"
                name="counterparty"
                value={counterparty}
                onChange={onChange} />
            </label>
        </div>

        <div>
          <label>Date:
            <input
              type="text"
              name="date"
              value={date}
              onChange={this.handleOnChange} />
          </label>
        </div>

        <div>
          <label>Add expense to the following account:
            <select onChange={onChange} name="account_id">
              {accounts_list}
            </select>
          </label>
        </div>

          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts,
  }
}

const mapDispatchToProps = {
    getAccounts,
    createTransaction,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditContainer)

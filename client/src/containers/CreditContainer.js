import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAccounts} from '../actions/accounts';
import { createTransaction } from '../actions/transactions'

import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/Forms.css';


class CreditContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticate: false,

      //Initial state for form
      amount: '',
      counterparty: '',
      date: new Date(),
      account_id: 1,
      parent_id: '',
      debit: false,
    }
    this.handleDateChange = this.handleDateChange.bind(this);
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
      <div className='FormContainer'>

      <div className="CreditForm">

      <h3 className="FormHeader">Please Enter Credit Information</h3>
      <hr />

      <Form onSubmit={this.handleOnSubmit}>

        <Form.Group controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            name="amount"
            value={amount}
            onChange={this.handleOnChange}
           />
        </Form.Group>

        <Form.Group controlId="formBasicInstitution">
          <Form.Label>Institution</Form.Label>
          <Form.Control
            type="text"
            name="counterparty"
            value={counterparty}
            onChange={this.handleOnChange}
           />
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <div>
          <DatePicker
            name="date"
            selected={date}
            onChange={this.handleDateChange}
            dateFormat="MMMM d, yyyy"
          />
          </div>
        </Form.Group>

        <div>
          <label>Add expense to the following account:</label>
            <select onChange={this.handleOnChange} name="account_id">
              {accounts_list}
            </select>
        </div>

        <div className="SubmitButton">
          <Button variant="dark" type="submit">
            Add Deposit
          </Button>
        </div>
        </Form>
      </div>
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

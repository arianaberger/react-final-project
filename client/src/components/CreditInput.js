import React from 'react';
import {Form, Button} from 'react-bootstrap';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreditInput = (props) => {

  const {amount, counterparty, date} = props.state

  const accounts_list = props.accounts.map(account => {
    return {value:`${account.id}`, label:`${account.name}`}
  })

  return(
    <div className='form-container'>
      <div className="transaction-form">

      <h3 className="form-header">Enter Credit Information</h3>
      <hr />

      <Form onSubmit={props.handleSubmit}>

        <Form.Group controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            required
            type="text"
            name="amount"
            value={amount}
            onChange={props.handleOnChange}
           />
        </Form.Group>

        <Form.Group controlId="formBasicInstitution">
          <Form.Label>Institution</Form.Label>
          <Form.Control
            required
            type="text"
            name="counterparty"
            value={counterparty}
            onChange={props.handleOnChange}
           />
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <div>
          <DatePicker
            name="date"
            selected={date}
            onChange={props.handleDateChange}
            dateFormat="MMMM d, yyyy"
          />
          </div>
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <div>
            <Form.Label>Add expense to the following account:</Form.Label>
            <Select
              options={accounts_list}
              onChange={props.handleSelectChange}
              defaultValue={{value: 1, label: "Main Account"}}
            />
          </div>
        </Form.Group>


        <div className="submit-button">
          <Button variant="info" type="submit" block>
            Add Transaction
          </Button>
        </div>
        </Form>
      </div>
    </div>
  )
}

export default CreditInput

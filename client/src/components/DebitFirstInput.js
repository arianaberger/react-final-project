import React from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DebitFirstInput = (props) => {

  const {amount, counterparty, date} = props.state

  return(
    <div className='FormContainer'>
    <div className="TransactionForm">

    <h3 className="FormHeader">Step 1: Enter Debit Information</h3>
    <hr />

    <Form onSubmit={props.handleFirstSubmit}>

      <Form.Group controlId="formBasicAmount">
        <Form.Label>Amount:</Form.Label>
        <Form.Control
          type="text"
          name="amount"
          value={amount}
          onChange={props.handleOnChange}
         />
      </Form.Group>

      <Form.Group controlId="formBasicInstitution">
        <Form.Label>Institution:</Form.Label>
        <Form.Control
          type="text"
          name="counterparty"
          value={counterparty}
          onChange={props.handleOnChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDate">
        <Form.Label>Date:</Form.Label>
        <div>
          <DatePicker
            name="date"
            selected={date}
            onChange={props.handleDateChange}
            dateFormat="MMMM d, yyyy"
          />
        </div>
      </Form.Group>


      <Button variant="info" type="submit" block>
        Submit Deposit
      </Button>
    </Form>
    </div>
    </div>

  )
}

export default DebitFirstInput

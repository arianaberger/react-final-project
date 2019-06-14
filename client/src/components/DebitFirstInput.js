import React from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DebitFirstInput = (props) => {

  const {amount, counterparty, date} = props.state

  return(
  <div>
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
      <DatePicker
        name="date"
        selected={date}
        onChange={props.handleDateChange}
        placeholderText="Click to select a date"
        dateFormat="d MMMM, yyyy"
      />
    </Form.Group>


    <Button variant="dark" type="submit">
      Add Deposit
    </Button>
  </Form>
  </div>
)

}

export default DebitFirstInput

import React from 'react';
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';

const DebitFirstInput = (props) => {
  const {amount, counterparty, date} = props.transactionFormData

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

    <Form.Group controlId="formBasiInstitution">
      <Form.Label>Institution:</Form.Label>
      <Form.Control
        type="text"
        name="counterparty"
        value={counterparty}
        onChange={props.handleOnChange}
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Add Deposit
    </Button>
  </Form>
  </div>
)
}

export default DebitFirstInput

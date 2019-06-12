import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';

const DebitFirstInput = (props) => {

  const {amount, counterparty, date} = props.transactionFormData

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

    <Form.Group controlId="formBasicChecbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>


  return(
    <div>
      <form onSubmit={props.handleFirstSubmit}>
        <div>
          <label>Amount:
            <input
              type="text"
              name="amount"
              value={amount}
              onChange={props.handleOnChange} />
          </label>
        </div>

        <div>
          <label>Institution:
            <input
              type="text"
              name="counterparty"
              value={counterparty}
              onChange={props.handleOnChange} />
          </label>
      </div>

      <div>
        <label>Date:
          <input
            type="text"
            name="date"
            value={date}
            onChange={props.handleOnChange} />
        </label>
      </div>

        <input type="submit" value="Add Deposit" />
      </form>
    </div>
  )
}

export default DebitFirstInput

import React from 'react';
import {Form, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import "react-datepicker/dist/react-datepicker.css";

const DebitInput = (props) => {

  const {amount, counterparty, date, percentage} = props.state

  return(
    <div className='form-container'>
      <div className="transaction-form">

      <h3 className="form-header">Step 1: Enter Debit Information</h3>
      <hr />

      <Form onSubmit={props.handleSubmit}>

        <Form.Group controlId="formBasicAmount">
          <Form.Label>Amount:</Form.Label>
          <Form.Control
            required
            type="text"
            name="amount"
            value={amount}
            onChange={props.handleOnChange}
           />
        </Form.Group>

        <Form.Group controlId="formBasicInstitution">
          <Form.Label>Institution:</Form.Label>
          <Form.Control
            required
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

        <Form.Group controlId="formBasicPercentage">
          <Form.Label>
            Choose a percentage to be allocated to each account:
          </Form.Label>
          <div className='slider-horizontal'>
           <Slider
             min={0}
             max={10}
             tooltip={false}
             value={percentage}
             orientation='horizontal'
             onChange={props.handleSliderChange}
           />
         </div>
         <div className='percentage'>{percentage}%</div>
        </Form.Group>

        <div className="SubmitButton">
          <Button variant="info" type="submit" block>
            Submit Deposit
          </Button>
        </div>
      </Form>
    </div>
  </div>
  )
}

export default DebitInput

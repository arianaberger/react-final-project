import React from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DebitSecondInput = (props) => {

  const {percentage} = props.state
  //There's gotta be a better way to get the options array/selected value...
  const percentage_options = [0,1,2,3,4,5,6,7,8,9,10]
  const percentage_select = percentage_options.map(percent => {
    return <option value={percent} key={percent}>{percent}</option>
  })

  return(
    <div>
      <Form onSubmit={props.handleSecondSubmit}>
        <Form.Group controlId="formBasicPercentage">
          <Form.Label>What percentage of this deposit should be allocated to each fund?</Form.Label>
          <Form.Control
            componentClass="select"
            name="percentage"
            value={percentage}
            select={percentage_select}
            onChange={props.handleOnChange}
           />
        </Form.Group>


        <Button variant="dark" type="submit">
          Finish Deposit
        </Button>
      </Form>
    </div>
  )
}

export default DebitSecondInput

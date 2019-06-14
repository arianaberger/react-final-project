import React from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import InputRange from 'react-input-range';

const DebitSecondInput = (props) => {

  const {percentage} = props.state
  //There's gotta be a better way to get the options array/selected value...
  const percentage_options = [0,1,2,3,4,5,6,7,8,9,10]
  const percentage_select = percentage_options.map(percent => {
    return <option value={percent} key={percent}>{percent}</option>
  })

/////SELECT FORM NOT WORKING
  return(
    <div>

    <InputRange
      maxValue={10}
      minValue={0}
      value={props.state.value}
      onChange={props.handleOnChange} />

      <input
        id="slider"
        type="range"
        min="0" max="10"
        name="percentage"
        value={props.state.value}
        onChange={props.handleOnChange}
        step="1"/>


      <Form onSubmit={props.handleSecondSubmit}>
        <Form.Group controlId="formBasicPercentage">
          <Form.Label>What percentage of this deposit should be allocated to each fund?</Form.Label>


        </Form.Group>

        <Button variant="dark" type="submit">
          Finish Deposit
        </Button>
      </Form>
    </div>
  )
}

export default DebitSecondInput

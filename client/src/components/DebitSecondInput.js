import React from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import '../css/Forms.css'

const DebitSecondInput = (props) => {

  const {percentage} = props.state

  return(
    <div className='FormContainer'>
    <div className="TransactionForm">

    <h3 className="FormHeader">Step 2: What percentage should be allocated to each account?</h3>
    <hr />

    <Form onSubmit={props.handleSecondSubmit}>
      <Form.Group controlId="formBasicPercentage">
        <div className='slider-horizontal'>
           <Slider
             min={0}
             max={10}
             tooltip={false}
             value={percentage}
             orientation='horizontal'
             onChange={props.handleSliderChange}
           />
           <div className='Percentage'>{percentage}%</div>
         </div>
        </Form.Group>

        <Button variant="info" type="submit" block>
          Finish Deposit
        </Button>
      </Form>
    </div>
    </div>
  )
}

export default DebitSecondInput

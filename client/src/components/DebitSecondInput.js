import React from 'react';

const DebitSecondInput = (props) => {

  const {percentage} = props.transactionFormData
  //There's gotta be a better way to get the options array/selected value...
  const percentage_options = [0,1,2,3,4,5,6,7,8,9,10]
  const percentage_select = percentage_options.map(percent => {
    return <option value={percent} key={percent}>{percent}</option>
  })

  return(
    <div>
      <form onSubmit={props.handleSecondSubmit}>
      <div>
        <label>What percentage of this deposit should be allocated to each fund?
          <select onChange={props.handleOnChange} name="percentage">
            <option value="" selected disabled>Choose %</option>
            {percentage_select}
          </select>
        </label>
      </div>

        <input type="submit" value="Add Deposits" />
      </form>
    </div>
  )
}

export default DebitSecondInput

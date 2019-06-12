import React from 'react';

const DebitFirstInput = (props) => {

  const {amount, counterparty, date} = props.transactionFormData

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

import React, { Component } from 'react';

class DebitInput extends Component {

  render() {
    const {amount, counterparty, date} = this.props.transactionFormData

    return(
      <div>
        <form onSubmit={this.props.handleFirstSubmit}>
          <div>
            <label>Amount:
              <input
                type="text"
                name="amount"
                value={amount}
                onChange={this.props.handleOnChange} />
            </label>
          </div>

          <div>
            <label>Institution:
              <input
                type="text"
                name="counterparty"
                value={counterparty}
                onChange={this.props.handleOnChange} />
            </label>
        </div>

        <div>
          <label>Date:
            <input
              type="text"
              name="date"
              value={date}
              onChange={this.props.handleOnChange} />
          </label>
        </div>

          <input type="submit" value="Add Deposit" />
        </form>
      </div>
    )
  }
}



export default DebitInput

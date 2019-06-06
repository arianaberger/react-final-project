import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTransactionFormData } from '../actions/transactionForm'
import { createTransaction } from '../actions/transactions'

class DebitInput extends Component {

  handleOnChange = event => {
    const currentTransactionFormData = Object.assign({}, this.props.transactionFormData, {
      [event.target.name]: event.target.value
    });
    this.props.updateTransactionFormData(currentTransactionFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createTransaction(this.props.transactionFormData)
      .then(this.props.resetTransactionForm)
  }

  render() {
    const {amount, counterparty, date, percentage} = this.props.transactionFormData
    const accounts_list = this.props.accounts.map(account => {
      return <option value={account.id} key={account.id} name="account">{account.name}</option>
    })

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>Amount:
              <input
                type="text"
                name="amount"
                value={amount}
                onChange={this.handleOnChange} />
            </label>
          </div>

          <div>
            <label>Institution:
              <input
                type="text"
                name="counterparty"
                value={counterparty}
                onChange={this.handleOnChange} />
            </label>
        </div>

        <div>
          <label>Date:
            <input
              type="text"
              name="date"
              value={date}
              onChange={this.handleOnChange} />
          </label>
        </div>

        <div>
          <label>Percentage:
            <input
              type="text"
              name="percentage"
              value={percentage}
              onChange={this.handleOnChange} />
          </label>
        </div>

        <div>
          Deposit money into the following account:
          <select>
            {accounts_list}
          </select>
        </div>

          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
    updateTransactionFormData,
    createTransaction
}

export default connect(null, mapDispatchToProps)(DebitInput)

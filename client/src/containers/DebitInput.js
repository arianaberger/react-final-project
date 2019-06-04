import React, { Component } from 'react';
import { updateTransactionFormData } from '../actions/transactionForm'


class DebitInput extends Component {

    state = {
      amount: '',
      counterparty: '',
      date: '',
      account_id: '',
      parent_id: '',
      debit: true,
      percentage: 0,
    }

  handleOnChange = event => {
    const currentTransactionFormData = Object.assign({}, this.props.transactionFormData, {

    });
    this.props.updateTransactionFormData(currentTransactionFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // this.props.addRestaurant(this.state.text);
    // this.setState({
    //   text: '',
    // });
  }

  render() {
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
                value={this.state.amount}
                onChange={this.handleOnChange} />
            </label>
          </div>

          <div>
            <label>Institution:
              <input
                type="text"
                name="institution"
                value={this.state.counterparty}
                onChange={this.handleOnChange} />
            </label>
        </div>

        <div>
          <label>Date:
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleOnChange} />
          </label>
        </div>

        <div>
          <label>Percentage:
            <input
              type="text"
              name="percentage"
              value={this.state.date}
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

export default DebitInput

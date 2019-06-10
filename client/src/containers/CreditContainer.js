import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts} from '../actions/accounts';
import { updateTransactionFormData } from '../actions/transactionForm'
import { createTransaction } from '../actions/transactions'

class CreditContainer extends Component {

  componentDidMount(){
    this.props.getAccounts()
  }

  handleOnChange = event => {
    const currentTransactionFormData = Object.assign({}, this.props.transactionFormData, {
      [event.target.name]: event.target.value,
    });
    this.props.updateTransactionFormData(currentTransactionFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createTransaction(this.props.transactionFormData)
  }

  render() {
    const {amount, counterparty, date, account_id} = this.props.transactionFormData
    const accounts_list = this.props.accounts.map(account => {
      return <option value={account.id} key={account.id}>{account.name}</option>
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
          <label>Add expense to the following account:
            <select onChange={this.handleOnChange} name="account_id">
              {accounts_list}
            </select>
          </label>
        </div>

          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts,
    transactionFormData: state.transactionFormData
  }
}

const mapDispatchToProps = {
    getAccounts,
    updateTransactionFormData,
    createTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditContainer)

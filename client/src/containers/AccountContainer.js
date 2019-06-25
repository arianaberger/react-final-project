import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccount } from '../actions/accounts';
import { updateTransaction } from '../actions/transactions';
import sortTransactions from '../helpers/transactions';
import TransactionsContainer from '../components/TransactionsContainer';
import accounting from 'accounting-js';

class AccountContainer extends Component {

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.getAccount(id)
  }

  onDeleteClick = (transaction) => {
    const id = this.props.match.params.id;
    this.props.updateTransaction(transaction, id)
  }

  render() {
    console.log("Account is:", this.props.account)

    const account = this.props.account
    const name = account.name
    const account_total = account.account_total
    const transactions = account.transactions || []
    const sorted_transactions = sortTransactions(transactions)

    return(
      <>

      <div className="account-header">
        <div className="bottom">
          {account_total ? <h1>{accounting.formatMoney(account_total)}</h1> : <h1>$0.00</h1>}
          <h6>Available Balance</h6>
        </div>
      </div>

      <div className="account-wrapper">
        <div className='transactions-header'>
          <h2>{name}</h2>
        </div>
      </div>

      <div className="account-wrapper">
        <div className="transactions">
        {account_total === 0 ? <p className="no-transactions">There are no transactions posted to this account</p> :
          <TransactionsContainer
            transactions={sorted_transactions}
            account_id={this.props.account.id}
            onDeleteClick={this.onDeleteClick} />
          }
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    account: state.accounts.account
  })
}

export default connect(mapStateToProps, {
  getAccount,
  updateTransaction
})(AccountContainer)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccount } from '../actions/accounts';
import { updateTransaction } from '../actions/transactions'
import  TransactionsContainer  from '../components/TransactionsContainer';

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

    return(
      <div>
      <h1>{name}</h1>
      <h3>Current Balance: ${account_total}</h3>
      <h4>Transactions:</h4>
      <TransactionsContainer transactions={transactions} onDeleteClick={this.onDeleteClick}/>
      </div>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccount } from '../actions/accounts';
import { updateTransaction } from '../actions/transactions'
import  TransactionsContainer  from '../components/TransactionsContainer';
import '../css/Accounts.css';
import format from 'accounting-js';

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
      <>

      <div className="AccountHeader">
      <div className="bottom">
        <h2>{format.formatMoney(account_total)}</h2>
        <h6>Available Balance</h6>
        </div>
      </div>



      <div className="AccountWrapper">
        <div>
          <div className='TransactionsHeader'><h4>{name} - Recent Transactions:</h4></div>
        </div>
      </div>

      <div className="AccountWrapper">
        <TransactionsContainer
          transactions={transactions}
          account_id={this.props.account.id}
          onDeleteClick={this.onDeleteClick}
        />
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

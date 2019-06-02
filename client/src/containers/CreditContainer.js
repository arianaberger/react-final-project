import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts} from '../actions/accounts';
import TransactionInput from './TransactionInput'

class CreditContainer extends Component {

  state = {
    amount: '',
    counterparty: '',
    date: '',
    account_id: '',
    parent_id: '',
    debit: true,
    percentage: 0,
  }

  componentDidMount() {
    this.props.getAccounts()
    if (this.props.match.url.includes("credit")) {
      this.setState({
        debit: false
      })
    }
  }

  render() {
    return(
      <TransactionInput account={this.props.accounts} />
          )
        }
      }

const mapStateToProps = (state) => {
  return ({
    accounts: state.accounts.accounts
  })
}

export default connect(mapStateToProps, { getAccounts })(CreditContainer)

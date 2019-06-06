import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts} from '../actions/accounts';
import DebitFirstInput from './DebitFirstInput'
import DebitSecondInput from './DebitSecondInput'
import { updateTransactionFormData } from '../actions/transactionForm'
import { createTransaction } from '../actions/transactions'

class DebitContainer extends Component {

  componentDidMount(){
    this.props.getAccounts()
    //this.props.getTransactions()
  }

  handleOnChange = event => {
    const currentTransactionFormData = Object.assign({}, this.props.transactionFormData, {
      [event.target.name]: event.target.value
    });
    this.props.updateTransactionFormData(currentTransactionFormData);
  }

  handleFirstSubmit = event => {
    event.preventDefault();
    this.props.createTransaction(this.props.transactionFormData)
    debugger
  }

  render() {
    return(
      <>
      <DebitFirstInput transactionFormData={this.props.transactionFormData} handleOnChange={this.handleOnChange}  handleFirstSubmit={this.handleFirstSubmit} />
      <DebitSecondInput accounts={this.props.accounts} transactionFormData={this.props.transactionFormData} />
</>
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

export default connect(mapStateToProps, { getAccounts, updateTransactionFormData,
createTransaction })(DebitContainer)

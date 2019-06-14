import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAccounts} from '../actions/accounts';
import DebitFirstInput from '../components/DebitFirstInput'
import DebitSecondInput from '../components/DebitSecondInput'
import { updateTransactionFormData, resetTransactionForm } from '../actions/transactionForm'
import { createTransaction } from '../actions/transactions'

class DebitContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_submit: false,
      authenticate: false,
      //Initial state for form
      amount: '',
      counterparty: '',
      date: new Date(),
      account_id: 1,
      parent_id: '',
      debit: true,
      percentage: '',
    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }


  componentDidMount(){
    this.props.getAccounts()
    this.props.resetTransactionForm()
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })

    const currentTransactionFormData = Object.assign({}, this.props.transactionFormData, {
      [event.target.name]: event.target.value
    });
    this.props.updateTransactionFormData(currentTransactionFormData);
  }

  handleDateChange(date) {
    this.setState({
      date: date
    })
  }

  handleFirstSubmit = event => {
    event.preventDefault();
    this.props.createTransaction(this.props.transactionFormData)
    this.setState({ first_submit: true })
  }

  handleSecondSubmit = event => {
    event.preventDefault();
    this.props.createTransaction(this.props.transactionFormData)
    this.props.resetTransactionForm()
    this.setState({ first_submit: false, authenticate: true })
  }

  render() {
    //Redirect to accounts page when form is submitted
    if (this.state.authenticate === true) {
      return <Redirect to='/' />
    }

    return(
      <>
        {this.state.first_submit ? null : <DebitFirstInput state={this.state} handleDateChange={this.handleDateChange} transactionFormData={this.props.transactionFormData} handleOnChange={this.handleOnChange} handleFirstSubmit={this.handleFirstSubmit} />}
        {this.state.first_submit ? <DebitSecondInput accounts={this.props.accounts} transactionFormData={this.props.transactionFormData} handleOnChange={this.handleOnChange} handleSecondSubmit={this.handleSecondSubmit}/> : null}
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

export default connect(mapStateToProps, {
  getAccounts,
  updateTransactionFormData,
  createTransaction,
  resetTransactionForm
})(DebitContainer)

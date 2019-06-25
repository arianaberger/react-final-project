import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAccounts} from '../actions/accounts';
import { createTransaction } from '../actions/transactions'
import CreditInput from '../components/CreditInput'

class CreditContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false,

      //Initial state for form
      amount: '',
      counterparty: '',
      date: new Date(),
      account_id: 1,
      parent_id: '',
      debit: false,
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount(){
    this.props.getAccounts()
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleDateChange(date) {
    this.setState({
      date: date
    })
  }

  handleSelectChange(account) {
    this.setState({
      account_id: account.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createTransaction(this.state)
    this.setState({
      submitted: true
    })
  }

  render() {

    //Redirect to accounts page when form is submitted
    if (this.state.submitted === true) {
      return <Redirect to='/' />
    }

    //Render form
    return(
      <CreditInput
        state={this.state}
        accounts={this.props.accounts}
        handleDateChange={this.handleDateChange}
        handleSelectChange={this.handleSelectChange}
        handleOnChange={this.handleOnChange}
        handleSubmit={this.handleSubmit}
     />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts,
  }
}

const mapDispatchToProps = {
    getAccounts,
    createTransaction,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditContainer)

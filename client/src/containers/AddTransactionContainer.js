import React, { Component } from 'react';
import { NavLink,
  BrowserRouter as Router,
  Route, } from 'react-router-dom';
// import ChooseTransactionComponent from '../components/ChooseTransactionComponent'
import AddTransactionComponent from './AddTransactionComponent'
import '../css/AddTransaction.css';

class AddTransactionContainer extends Component {

  constructor() {
    super()
    this.state = {
      show_transaction_form: false,
      debit_form: true
    }
    this.handleClickDebit = this.handleClickDebit.bind(this);
    this.handleClickCredit = this.handleClickCredit.bind(this);
  }

  handleClickDebit(event) {
    this.setState({
      debit_form: true,
      show_transaction_form: true
    })
  }

  handleClickCredit(event) {
    this.setState({
      debit_form: false,
      show_transaction_form: true
    })
  }

  render() {
    return(
      <>
        <button onClick={this.handleClickDebit}>+ Add a Deposit</button>
        <button onClick={this.handleClickCredit}>+ Add a Payment</button>
      </>
    )
    if (this.state.show_transaction_form) {
      return (
        "show the form!"
      )
    }

        // <Router>
        //   <ChooseTransactionComponent />
        //   <Route
        //     exact path="addtransaction/debit"
        //     component={AddTransactionComponent} />
        //   <Route
        //     exact path="addtransaction/credit"
        //     component={AddTransactionComponent} />
        // </Router>
  }
}

export default AddTransactionContainer

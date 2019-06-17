import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAccounts} from '../actions/accounts';
import DebitFirstInput from '../components/DebitFirstInput'
import DebitSecondInput from '../components/DebitSecondInput'
import { createTransaction } from '../actions/transactions'

class DebitContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_submit: false,
      submitted: false,

      //Initial state for form
      amount: '',
      counterparty: '',
      date: new Date(),
      account_id: 1,
      parent_id: '',
      debit: true,
      percentage: 5,
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

    componentDidMount(){
      this.props.getAccounts()
    }

    handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleDateChange(date) {
      this.setState({
        date: date
      })
    }

    handleSliderChange(percentage) {
      this.setState({
        percentage: percentage
      })
    }

    handleFirstSubmit = event => {
      event.preventDefault();
      this.setState({ first_submit: true })
    }

    handleSecondSubmit = event => {
      event.preventDefault();
      this.props.createTransaction(this.state)
      this.setState({
        first_submit: false,
        submitted: true,
     })
    }

    render() {
      //Redirect to accounts page when form is submitted
      if (this.state.submitted === true) {
        return <Redirect to='/' />
      }

      return(
        <>
          {this.state.first_submit ? null : <DebitFirstInput
            state={this.state}
            handleDateChange={this.handleDateChange}
            handleOnChange={this.handleOnChange}
            handleFirstSubmit={this.handleFirstSubmit} />
          }
          {this.state.first_submit ? <DebitSecondInput
            state={this.state}
            handleSliderChange={this.handleSliderChange}
            accounts={this.props.accounts}
            handleSecondSubmit={this.handleSecondSubmit}/> : null
          }
        </>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts,
  }
}

export default connect(mapStateToProps, {
  getAccounts,
  createTransaction,
})(DebitContainer)

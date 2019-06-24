import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createTransaction } from '../actions/transactions'
import { getAccounts} from '../actions/accounts';
import DebitInput from '../components/DebitInput'

class DebitContainer extends Component {

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

    handleSubmit = event => {
      event.preventDefault();
      this.props.createTransaction(this.state)
      this.setState({
        submitted: true,
     })
    }

    render() {
      //Redirect to accounts page when form is submitted
      if (this.state.submitted === true) {
        return <Redirect to='/' />
      }

      return(
          <DebitInput
            state={this.state}
            handleDateChange={this.handleDateChange}
            handleSliderChange={this.handleSliderChange}
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

export default connect(mapStateToProps, {
  getAccounts,
  createTransaction,
})(DebitContainer)

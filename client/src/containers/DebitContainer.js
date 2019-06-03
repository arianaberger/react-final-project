import React, { Component } from 'react';
import { connect } from 'react-redux';

class DebitContainer extends Component {

  state = {
    amount: '',
    counterparty: '',
    date: '',
    account_id: '',
    parent_id: '',
    debit: true,
    percentage: 0,
  }


  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    console.log("Transaction input props are:", this.props.accounts)

   //  const {accounts} = this.props.accounts
   //
   // //iterate over accounts to create an array of options for select
   // const list = accounts.map((account) =>
   //   <option value={account.id} key={account.id} name="account">{account.name}</option>
   // )

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>

          <label>Amount:
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleOnChange} />
          </label>

          <label>Institution:
            <input
              type="text"
              name="institution"
              value={this.state.counterparty}
              onChange={this.handleOnChange} />
          </label>

          <label>Date:
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleOnChange} />
          </label>

          <label>Percentage:
            <input
              type="text"
              name="percentage"
              value={this.state.date}
              onChange={this.handleOnChange} />
          </label>

          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  debugger
  return ({
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts
  })
}

export default connect(mapStateToProps)(DebitContainer)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts} from '../actions/accounts';
import '../css/AddTransaction.css';

class TransactionInput extends Component {

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
    if (this.props.match.url === "/credit") {
      this.setState({
        debit: false
      })
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
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
              value={this.state.amount}
              onChange={this.handleOnChange} />
          </label>

          <label>Institution:
            <input
              type="text"
              value={this.state.counterparty}
              onChange={this.handleOnChange} />
          </label>

          <label>Date:
            <input
              type="text"
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
  return ({
    accounts: state.accounts.accounts
  })
}

export default connect(mapStateToProps, { getAccounts })(TransactionInput)

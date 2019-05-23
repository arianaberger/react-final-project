import React, { Component } from 'react';
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
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default TransactionInput

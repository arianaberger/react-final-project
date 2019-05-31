import React, { Component } from 'react';
import Accounts from './Accounts';
import { connect } from 'react-redux';
import { getAccounts} from '../actions/accounts';

class AccountsContainer extends Component {

  componentDidMount(){
    this.props.getAccounts()
  }

  render() {
    console.log("AccountsContainer props are:", this.props.accounts)
    return(
      <Accounts accounts={this.props.accounts} />
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    accounts: state.accounts
  })
}

export default connect(mapStateToProps, { getAccounts })(AccountsContainer)

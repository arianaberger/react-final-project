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
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts
  })
}

export default connect(mapStateToProps, { getAccounts })(AccountsContainer)

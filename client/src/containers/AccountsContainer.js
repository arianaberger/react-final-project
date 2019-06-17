import React, { Component } from 'react';
import Accounts from '../components/Accounts';
import AccountTotal from '../components/AccountTotal';
import { connect } from 'react-redux';
import { getAccounts, getTotal} from '../actions/accounts';

class AccountsContainer extends Component {

  componentDidMount(){
    this.props.getTotal();
    this.props.getAccounts();
  }

  state = {
    update: false,
    id: ''
  }

  handleOnClick = (event, id) => {
    event.preventDefault();
    this.setState({
      update: true,
      id: id
    })
  }

  handleFormSubmit = () => {
    this.setState({
      update: false
    })
  }

  render() {
    const Accounts = (account) => {
      return (
        <Accounts
          account={account}
          key={account.id}
          state={this.state}
          handleOnClick={this.handleOnClick}
          handleFormSubmit={this.handleFormSubmit}
        />
      )
    }

    return(
      <>
        <div className="Welcome">
        <h2>Welcome!</h2>
        <h6>Your account overview is below. Happy saving :)</h6>
        </div>

        <AccountTotal total={this.props.total} />

        <div className="AccountWrapper">
          <div className="Accounts">
            <div className="AccountsHeader">ACCOUNT NAME</div>
            <div className="AccountsHeader">ACCOUNT BALANCE</div>
            <div className="AccountsEditHeader">EDIT</div>

        {this.props.accounts.map(account => {Accounts(account)})}
        </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts,
    total: state.accounts.total
  })
}

export default connect(mapStateToProps, { getAccounts, getTotal })(AccountsContainer)

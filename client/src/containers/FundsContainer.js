import React, { Component } from 'react';
import Funds from './Funds';
import { connect } from 'react-redux';
import { getAccounts} from '../actions/accounts';

class FundsContainer extends Component {

  componentDidMount(){
    this.props.getAccounts()
  }
  
  render() {
    console.log("FundsContainer props are:", this.props.accounts)
    return(
      <Funds funds={this.props.accounts} />
    )
  }

}

const mapStateToProps = (state) => {
  return ({
    accounts: state.accounts
  })
}
export default connect(mapStateToProps, { getAccounts })(FundsContainer)

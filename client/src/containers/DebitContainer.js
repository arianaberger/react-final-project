import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts} from '../actions/accounts';
import DebitInput from './DebitInput'

class DebitContainer extends Component {

  componentDidMount(){
    this.props.getAccounts()
  }

  render() {

    return(
      <DebitInput accounts={this.props.accounts} />
    )
  }


}

const mapStateToProps = (state) => {
  return ({
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts,
    transactionFormData: state.transactionFormData
  })
}

export default connect(mapStateToProps, { getAccounts })(DebitContainer)

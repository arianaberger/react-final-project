import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccounts} from '../actions/accounts';
import DebitInput from './DebitInput'

class DebitContainer extends Component {

  componentDidMount(){
    this.props.getAccounts()
    let debitInput = this.props.accounts
  }

  render() {
    if (this.props.accounts.count) {
      this.debitInput = <DebitInput accounts={this.props.accounts} />
    } else {
      this.debitInput = "loading..."
    }

    return(
      <div>
      {this.debitInput}
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return ({
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts
  })
}

export default connect(mapStateToProps, { getAccounts })(DebitContainer)

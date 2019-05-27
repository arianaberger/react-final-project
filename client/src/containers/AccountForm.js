import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountForm extends Component {

  render() {
    return(
      <div>
        Form goes here
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accountFormData: state.accountFormData
  }
}

export default connect(mapStateToProps)(AccountForm)

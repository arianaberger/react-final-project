import React, { Component } from 'react';

state = {
  votes: 0
}

handleVoteClick = () => {
  this.setState({
    votes: this.state.votes ++ 1
  })
}

class AccountComponent extends Component {

  const account = this.props.account
  
  render() {
    return (

      <div key={account.id}>
        <div className="AccountName">
          {props.state.update && account.id === props.state.id ?
            <AccountForm account_id={account.id}
              account_name={account.name}
              handleFormSubmit={props.handleFormSubmit}/> :
            <NavLink to={`/accounts/${account.id}`}>
              <h3>{account.name}</h3>
            </NavLink>
          }
        </div>

        <div className="AccountTotal">
          <h3>{format.formatMoney(account.account_total)}</h3>
        </div>

        <div>
          <button onClick={this.handleVoteClick}>Click</button>
        </div>

        <div className="AccountEdit">
          {account.id !== 1 ?
            <img src={edit} alt="edit" className="edit-image" onClick={
              (event) => props.handleOnClick(event, account.id)
            } /> :
            null
          }
        </div>
      </div>

    )
  }

}

export default AccountComponent

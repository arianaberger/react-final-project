import React, { Component } from 'react';
import AccountForm from '../containers/AccountForm';
import { NavLink } from 'react-router-dom';
import format from 'accounting-js';
import edit from '../images/edit.png';

class AccountRow extends Component {

   state = {
    votes: 0
   }

  handleVoteClick = () => {
    this.setState({
      votes: this.state.votes += 1
    })
  }

  render() {
    const props = this.props
    const account = this.props.account

    return (
     <tr>
       <td>
         {props.state.update && account.id === props.state.id ?
           <AccountForm account_id={account.id}
             account_name={account.name}
             handleFormSubmit={props.handleFormSubmit}/> :
           <NavLink to={`/accounts/${account.id}`}>
             <h3>{account.name}</h3>
           </NavLink>
         }
       </td>

       <td>
         <h3>{format.formatMoney(account.account_total)}</h3>
       </td>

       <td>
         {account.id !== 1 ?
           <img src={edit} alt="Edit Button" className="edit-image" onClick={
             (event) => props.handleOnClick(event, account.id)
           } /> :
           null
         }
       </td>

       <td>
         <button onClick={this.handleVoteClick}>+</button>
         {this.state.votes}
       </td>

       </tr>

    )
  }

}

export default AccountRow

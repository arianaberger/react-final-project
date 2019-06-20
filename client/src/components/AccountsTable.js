import React from 'react';
import AccountForm from '../containers/AccountForm'
import AccountRow from './AccountRow';

const AccountsTable = (props) => {

  const displayAccounts = () => {
    return props.accounts.map(account => {
      return <AccountRow
        account={account}
        handleFormSubmit={props.handleFormSubmit}
        handleOnClick={props.handleOnClick}
        state={props.state}
        key={account.id}
      />
    })
  }

  return (
    <div className="AccountWrapper">
      <table className="Accounts">
        <thead>
          <tr className="account-table-header">
            <th>ACCOUNT NAME</th>
            <th>ACCOUNT BALANCE</th>
            <th>EDIT</th>
            <th>{'<3'}</th>
          </tr>
        </thead>
        <tbody>{displayAccounts()}</tbody>
      </table>
    </div>
  )
}

export default AccountsTable;

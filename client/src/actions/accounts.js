import { resetAccountForm } from './accountForm'

const API_URL = process.env.REACT_APP_API_URL;

const setAccounts = accounts => {
  return {
    type: 'GET_ACCOUNTS_SUCCESS',
    accounts
  }
}

const updateAccount = account => {
  return {
    type: 'UPDATE_ACCOUNT_SUCCESS',
    account
  }
}

export const getAccounts = () => {
  return dispatch => {
    return fetch(`${API_URL}/accounts`)
    .then(response => response.json())
    .then(accounts => dispatch(setAccounts(accounts)))
    .catch(error => console.log(error))
  }
}

export const createAccount = account => {
  return dispatch => {
    return fetch(`${API_URL}/accounts/${account.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'applications/json'
    },
      body: JSON.stringify({ account: account })
  })
  .then(response => response.json())
  .then(account => {
    dispatch(updateAccount(account))
    dispatch(resetAccountForm())
  })
  .catch(error => console.log(error))
  }
}

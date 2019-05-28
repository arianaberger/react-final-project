const API_URL = process.env.REACT_APP_API_URL;

const setAccounts = accounts => {
  return {
    type: 'GET_ACCOUNTS_SUCCESS',
    accounts
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
    return fetch(`${API_URL}/accounts/${account.id}`){
      method: 'PATCH',
      headers: {
        'Content-Type': 'applications/json'
    },
      body: JSON.stringify({ account: account })
  })

  }
}

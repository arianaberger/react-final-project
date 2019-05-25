const API_URL = process.env.REACT_APP_API_URL;

const setAccounts = accounts => {
  return {
    type: 'GET_ACCOUNTS_SUCCESS',
    acounts
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

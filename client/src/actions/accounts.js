import { resetAccountForm } from './accountForm'

const API_URL = process.env.REACT_APP_API_URL;

const setAccounts = accounts => {
  return {
    type: 'GET_ACCOUNTS_SUCCESS',
    accounts
  }
}

const patchAccountSuccess = account => {
  return {
    type: 'UPDATE_ACCOUNT_SUCCESS',
    account
  }
}

// FETCH FUNCTIONS
export const getAccounts = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/accounts')
    // return fetch(`${API_URL}/accounts`)
    .then(response => response.json())
    .then(accounts => dispatch(setAccounts(accounts)))
    .catch(error => console.log(error))
  }
}


//NOT MY CODE, why wasn't what I had before not working?
export const updateAccount = id => {
  return function(dispatch) {
    return patchAccount(id).then(account => {
      if (account.status) {
        alert(`Status: ${account.status}, ${account.error}`)
      } else {
        dispatch(patchAccountSuccess(account))
        //reset form not working, says resetAccountForm is not defined
        dispatch(resetAccountForm())
      }
    })
  }
}

async function patchAccount(account) {
  const url = `/api/accounts/${account.id}.json;`
  const settings = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({account: account})
  }
  const fetchResult = fetch(url, settings);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

//MY OLD CODE:
// export const updateAccount = account => {
//   return dispatch => {
//     return fetch(`${API_URL}/accounts/${account.id}`, {
//       method: 'PATCH',
//       body: JSON.stringify({account: account}),
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'applications/json'
//     }
//   })
//   .then(response => response.json())
//   .then(account => {
//     console.log("updateaccount json response:", account)
//     dispatch(upda(account))
//     dispatch(resetAccountForm())
//   })
//   .catch(error => console.log(error))
//   }
// }

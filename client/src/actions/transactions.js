import { getTotal } from './accounts'
import { getAccounts, getAccount } from './accounts'

const API_URL = process.env.REACT_APP_API_URL;

//FETCH FUNCTIONS
export const createTransaction = (transaction) => {
  return function(dispatch) {
    return postTransaction(transaction).then(transaction => {
      if (transaction.status) {
        alert(`Status: ${transaction.status}, ${transaction.error}`)
      } else {
        dispatch(getTotal())
        dispatch(getAccounts())
      }
    })
  }
}

async function postTransaction(transaction) {
  const url = `/api/transactions.json;`
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({transaction: transaction})
  }
  const fetchResult = fetch(url, settings);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

export const updateTransaction = (transaction, id) => {
  return function(dispatch) {
    return patchTransaction(transaction).then(transaction => {
      if (transaction.status) {
        alert(`Status: ${transaction.status}, ${transaction.error}`)
      } else {
        dispatch(getAccount(id))
      }
    })
  }
}

async function patchTransaction(transaction) {
  const url = `/api/transactions/${transaction.id}.json;`
  const settings = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({transaction: transaction})
  }
  const fetchResult = fetch(url, settings);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

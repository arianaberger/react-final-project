import { resetTransactionForm } from './transactionForm'

const API_URL = process.env.REACT_APP_API_URL;

const createTransactionSuccess = transaction => {
  return {
    type: 'CREATE_TRANSACTION_SUCCESS',
    transaction
  }
}

//FETCH FUNCTIONS
export const createTransaction = (transaction) => {
  return function(dispatch) {
    return postTransaction(transaction).then(transaction => {
      if (transaction.status) {
        alert(`Status: ${transaction.status}, ${transaction.error}`)
      } else {
        dispatch(createTransactionSuccess(transaction))
        // dispatch(resetTransactionForm())
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

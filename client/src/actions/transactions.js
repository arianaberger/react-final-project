const API_URL = process.env.REACT_APP_API_URL;

const createTransactionSuccess = transaction => {
  return {
    type: 'CREAT_TRANSACTION_SUCCESS',
    transaction
  }
}

//FETCH FUNCTIONS
export const createTransaction = () => {
  return function(dispatch) {
    if (transaction.status) {
      alert(`Status: ${transaction.status}, ${transaction.error}`)
    } else {
      dispatch(createTransactionSuccess(transaction))
    }
  }
}

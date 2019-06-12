export default (state = [], action) => {

  switch(action.type) {
    case 'CREATE_TRANSACTION_SUCCESS':
      return state.concat(action.transaction)

    case 'UPDATE_TRANSACTION_SUCCESS' :
      return {
        ...state,
        ...state.map((transaction) =>
        transaction.id === action.transaction.id ? {
          ...transaction, account_id: action.transaction.account_id
        } : transaction)
      }

      default: return state;
    }
  }

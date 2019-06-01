export default (state = {accounts: [],
transactions: []}, action) => {
  
  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return {...state, accounts: action.accounts}

      case 'UPDATE_ACCOUNT_SUCCESS' :
        return {
          ...state,
          accounts: [
            ...state.accounts.map((account) => account.id === action.account.id ? {...account, name: action.account.name} : account)
          ]
        }

      default: return state;
    }
  }

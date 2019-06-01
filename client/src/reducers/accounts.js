export default (state = {accounts: [],
transactions: []}, action) => {
  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return {...state, accounts: action.accounts}

      case 'UPDATE_ACCOUNT_SUCCESS' :
        const new_state = () => {
          return {...state,
          accounts: [...state.accounts.filter(account => account.id !== action.account.id)]
          }
        }
        return {
          ...new_state(),
          accounts: [
            ...new_state().accounts, action.account
          ]
        }

      default: return state;
    }
  }

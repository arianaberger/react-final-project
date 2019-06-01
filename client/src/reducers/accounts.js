export default (state = {accounts: [],
transactions: []}, action) => {
  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return {...state, accounts: action.accounts}

      case 'UPDATE_ACCOUNT_SUCCESS' :
      //new_state is a function because I couldn't figure out how to get the code working otherwise!
        // const new_state = () => {
        //   return {...state,
        //   accounts: [...state.accounts.filter(account => account.id !== action.account.id)]
        //   }
        // }
        // return {
        //   ...new_state(),
        //   accounts: [
        //     ...new_state().accounts, action.account
        //   ]
        // }

        return {
          ...state,
          accounts: [
            ...state.accounts.map((account) => account.id === action.account.id ? {...account, name: action.account.name} : account)
          ]
        }

      default: return state;
    }
  }

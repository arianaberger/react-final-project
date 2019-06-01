export default (state = {accounts: [],
transactions: []}, action) => {
  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return {...state, accounts: action.accounts}

      case 'UPDATE_ACCOUNT_SUCCESS' :
        // initialStatestate.accounts.filter(account => account.id !== action.id)
        // return {
        //   ...new_state,
        //   accounts: [
        //     ...new_state.accounts, action.account
        // ]}
        return {
          ...state,
          accounts: [
            ...state.accounts, action.account
          ]}


      default: return state;
    }
  }

export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return action.accounts;

      case 'UPDATE_ACCOUNT_SUCCESS':
        return {
          ...state,
          account: [...state.accounts.filter(account )]
          state.concat(action.account);

      default: return state;
  }
}

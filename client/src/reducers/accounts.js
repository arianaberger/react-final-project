export default (state= [], action) => {
  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return action.accounts;

      default: return state;
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return action.accounts;

      case 'UPDATE_ACCOUNT_SUCCESS' :
          console.log("state from accounts reducer:", action.account)

      default: return state;
    }
  }

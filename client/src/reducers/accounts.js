export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return action.accounts;

      case 'UPDATE_ACCOUNT_SUCCESS' :
        // return state;
        console.log("you hit the reducer")

      default: return state;
    }
  }

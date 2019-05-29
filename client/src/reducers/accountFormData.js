const initialState = {
  id: 1,
  name: '',
  main_account: false
}

export default(state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_ACCOUNT':
      // return action.accountFormData;
      console.log("account form reducer:", action.accountFormData)

    case 'RESET_ACCOUNT_FORM' :
      return initialState;

    default: return state;
  }
}

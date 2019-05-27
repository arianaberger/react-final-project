export default (state= {
  name: '',
  main_account: false
}, action) => {

  switch(action.type) {
    case 'UPDATED_ACCOUNT':
      return action.accountFormData;

      default: return state;
  }
}

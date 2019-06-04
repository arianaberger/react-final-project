const initialState = {
  amount: '',
  counterparty: '',
  date: '',
  account_id: '',
  parent_id: '',
  debit: true,
  percentage: 0,
}

export default(state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_ACCOUNT':
      return action.accountFormData;

    case 'RESET_ACCOUNT_FORM' :
      return initialState;

    default: return state;
  }
}

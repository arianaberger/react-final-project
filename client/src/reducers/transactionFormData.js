const initialState = {
  amount: '',
  counterparty: '',
  date: '',
  account_id: 1,
  parent_id: '',
  debit: true,
  percentage: '',
}

export default(state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_TRANSACTION_DATA':
      return action.transactionFormData;

    case 'RESET_TRANSACTION_FORM':
      return initialState;

    default: return state;
  }
}

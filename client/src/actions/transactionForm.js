export const updateTransactionFormData = transactionFormData => {
  return {
    type: 'UPDATED_TRANSACTION_DATA',
    transactionFormData
  }
}

export const resetTransactionForm = () => {
  return {
    type: 'RESET_TRANSACTION_FORM'
  }
}

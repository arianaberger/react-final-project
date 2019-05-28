export const updateAccountFormData = accountFormData => {
  return {
    type: 'UPDATED_DATA',
    accountFormData
  }
}

export const resetAccountForm = () => {
  return {
    type: 'RESET_ACCOUNT_FORM'
  }
}

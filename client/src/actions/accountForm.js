export const updateAccountFormData = accountFormData => {
  return {
    type: 'UPDATED_ACCOUNT',
    accountFormData
  }
}

export const resetAccountForm = () => {
  return {
    type: 'RESET_ACCOUNT_FORM'
  }
}

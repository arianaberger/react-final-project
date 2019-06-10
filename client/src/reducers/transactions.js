export default (state = [], action) => {

  switch(action.type) {
    case 'CREATE_TRANSACTION_SUCCESS':
    debugger
      return state.concat(action.transaction)

      default: return state;
    }
  }

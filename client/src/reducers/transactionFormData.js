export default (state= [

], action) => {

  switch(action.type) {
    case 'ADD_TRANSACTION':
      return action.transaction;

      default: return state;
  }
}

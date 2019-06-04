import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import accounts from './reducers/accounts'
import accountFormData from './reducers/accountFormData'
import transactionFormData from './reducers/transactionFormData'

const reducers = combineReducers({
  accounts,
  accountFormData,
  transactionFormData
});

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
  applyMiddleware(...middleware)
  )
)

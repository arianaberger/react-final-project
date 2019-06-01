import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import AccountsContainer from './AccountsContainer';
import AddTransactionContainer from './AddTransactionContainer';
import TransactionInput from './TransactionInput';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <NavBar />
	      <Route exact path="/"
          component={AccountsContainer}
           />
	      <Route
          exact path="/addtransaction"
          component={AddTransactionContainer} />
    </Router>
    </>
    );
  };
}

export default App;

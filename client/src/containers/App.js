import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import FundsContainer from './FundsContainer';
import AddTransactionContainer from './AddTransactionContainer';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <NavBar />
	      <Route exact path="/"
          component={FundsContainer}
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

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import AccountsContainer from './AccountsContainer';
import CreditContainer from './CreditContainer';
import DebitContainer from './DebitContainer';
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
         <Route exact path="/debit"
            component={DebitContainer}
             />
         <Route exact path="/credit"
           component={CreditContainer}
            />
    </Router>
    </>
    );
  };
}

export default App;

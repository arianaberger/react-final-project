import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import AccountsContainer from './AccountsContainer';
import CreditContainer from './CreditContainer';
import DebitContainer from './DebitContainer';
import AccountContainer from './AccountContainer';
import Footer from './Footer';
import '../css/App.css';
import '../css/Forms.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="content-wrap">
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
          <Route exact path="/accounts/:id"
            component={AccountContainer}
          />
          <Footer />
    </Router>
    </div>
    </div>
    );
  };
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Navigation from './containers/Navigation';
import FundsContainer from './containers/FundsContainer';
import AddTransactionContainer from './containers/AddTransactionContainer';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      accounts: []
    }
  }

  componentDidMount() {
    fetch('api/accounts')
      .then(resp => resp.json())
      // .then(json => console.log(json))
      // .then(res => res.text()) // convert to plain text
      // .then(text => console.log("this is the response:", text))
      .then(accounts => this.setState({ accounts }))
  }

  render() {
    console.log("le state is...", this.state.accounts)
    return (
      <>
      <Router>
        <Navigation />
	      <Route exact path="/dashboard" component={Navigation} />
	      <Route exact path="/addtransaction" component={AddTransactionContainer} />
        <FundsContainer funds={this.state.accounts} />
    </Router>
    </>
    );
  };
}

export default App;

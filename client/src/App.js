import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
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
      .then(accounts => this.setState({ accounts }))
  }

  render() {
    console.log("the state is:", this.state.accounts)
    return (
      <>
      <Router>
        <div>
        <Navigation />
	      <Route exact path="/"
          render={(props) => <AccountsDashboard {...props} funds={this.state.accounts} />
	      <Route
          exact path="/addtransaction"
          component={AddTransactionContainer} />
    </Router>
    </>
    );
  };
}

export default App;

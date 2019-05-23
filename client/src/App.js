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

const funds = [
  {
    name: "Treat Yourself",
    amount: 500
  },
  {
    name: "Give to Others",
    amount: 400
  },
  {
    name: "Big Purchases",
    amount: 600
  },
  {
    name: "Savings",
    amount: 1000
  }
]

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
    console.log(this.state)
    return (
      <>
      <Router>
        <Navigation />
	      <Route exact path="/dashboard" component={Navigation} />
	      <Route exact path="/addtransaction" component={AddTransactionContainer} />
        <FundsContainer funds={funds} />
    </Router>
    </>
    );
  };
}

export default App;

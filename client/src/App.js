import React, { Component } from 'react';
import './css/App.css';
import Navigation from './containers/Navigation';
import FundsContainer from './containers/FundsContainer';
import AddTransactionContainer from './containers/AddTransactionContainer';

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
      // .then(resp => resp.json())
      .then(res => res.text())          // convert to plain text
      .then(text => console.log("this is the response:", text)) 
      .then(accounts => this.setState({ accounts }))
  }

  render() {
    console.log(this.state)
    return (
      <>
        <Navigation />
        <div className='App'>
          <AddTransactionContainer />
          <FundsContainer funds={funds}/>
        </div>
      </>
    );
  };
}

export default App;

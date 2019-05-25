import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import FundsContainer from './FundsContainer';
import AddTransactionContainer from './AddTransactionContainer';
import '../css/App.css';


const Main = () =>  <h1>"Hello"</h1>

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
    setTimeout(() => {console.log("the state is:", this.state.accounts)}, 1000)

    return (
      <>
      <Router>
        <NavBar />
        <FundsContainer />
	      <Route exact path="/"
          component={Main}
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

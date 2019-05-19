import React from 'react';
import './css/App.css';
import Navigation from './containers/Navigation';
import FundsContainer from './containers/FundsContainer';
import AddTransactionContainer from './containers/AddTransactionContainer';


function App() {
  return (
    <>
      <Navigation />
      <div className='App'>
        <AddTransactionContainer />
        <FundsContainer />
      </div>
    </>
  );
}

export default App;

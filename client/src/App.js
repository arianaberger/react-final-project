import React from 'react';
import './css/App.css';
import Navigation from './containers/Navigation';
import FundsContainer from './containers/FundsContainer';

function App() {
  return (
    <>
      <Navigation />
      <div className='App'>
        <FundsContainer />
      </div>
    </>
  );
}

export default App;



import React from 'react';
import './App.css';

import SmurfVillage from './SmurfVillage';
import SmurfData from './SmurfData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Do you love Smurfs</h1>
      </header>
      <div>
        <SmurfVillage />
        <SmurfData />
      </div>
    </div>
  );
}



export default App;

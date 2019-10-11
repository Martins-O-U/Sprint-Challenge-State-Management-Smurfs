import React, { Component } from "react";

import Smurf from "./SmurfData";
import "./App.css";
import SmurfList from "./SmurfVillage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='App-header'>Welcome to Smurf Village</h1>
        <Smurf />
        <SmurfList />
      </div>
    );
  }
}
export default App;

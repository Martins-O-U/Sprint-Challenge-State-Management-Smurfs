import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import Smurf from "./SmurfData";
import "./App.css";
import SmurfList from "./SmurfVillage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='App-header'>Welcome to Smurf Village</h1>
        <p>Click <Link to={'/smurfData'}><i>-Here-</i> </Link>to add more villagers  or <Link to={'/'}><i>-Here-</i></Link> to return to Home </p>
        <Route exact path ='/' component={SmurfList}/>
        <Route path ='/smurfData' component ={Smurf} />
      </div>
    );
  }
}
export default App;

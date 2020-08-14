// https://github.com/royeradames/web-sprint-challenge-advanced-state-management
// API http://localhost:3333/smurfs
import React, { Component } from "react";
import "./App.css";

//components
import Form from './Form'
import SmurfCard from './SmurfCard'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to the Smurfs Village!</div>
        <div>Have fun!</div>
        <Form/>
        <SmurfCard/>
      </div>
    );
  }
}

export default App;

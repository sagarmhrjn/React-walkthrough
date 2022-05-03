import React, { Component } from 'react';
import Person from './Person/person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <Person/>
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;

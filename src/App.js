import React, { Component } from "react";
import Person from "./Person/person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      {name: "Sagar", age: 27},
      {name: "Jason", age: 28},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies: Alcohol
        </Person>
      </div>
    );
  }
}

export default App;

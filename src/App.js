import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Sagar", age: 27 },
      { name: "Jason", age: 28 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log("Was clicked!");
    // DO NOT DO THIS this.state.persons[0].name = "Max";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "John", age: 26 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button onClick={() => this.switchNameHandler("Tom")} style={style}>
          Switch Name!
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Rikee")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Alcohol
        </Person>
      </div>
    );
  }
}

export default App;

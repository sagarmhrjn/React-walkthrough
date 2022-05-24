import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
class App extends Component {
  state = {
    userInput: "",
  };

  inputChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    console.log(updatedText)
    this.setState({ userInput: updatedText });
  };
  
  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          click={() => this.deleteCharHandler(index)}
          key={index}
        />
      );
    });
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangedHandler}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;

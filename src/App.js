import React, { useState } from "react";
import Person from "./Person/person";
import "./App.css";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Sagar", age: 27 },
      { name: "Jason", age: 28 },
    ],
    otherState: "some other value.",
  });

  const [otherState, setOtherState] = useState("some other value.");

  console.log(personsState , otherState);
  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DO NOT DO THIS this.state.persons[0].name = "Max";
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: "John", age: 26 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a react app.</h1>
      <button onClick={switchNameHandler}>Switch Name!</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Alcohol
      </Person>
    </div>
  );
};

export default app;

// state = {
//   persons: [
//     { name: "Sagar", age: 27 },
//     { name: "Jason", age: 28 },
//   ],
// };

// switchNameHandler = () => {
//   // console.log("Was clicked!");
//   // DO NOT DO THIS this.state.persons[0].name = "Max";
//   this.setState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "John", age: 26 },
//     ],
//   });
// };

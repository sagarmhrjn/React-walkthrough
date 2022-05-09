import React from "react";

const Person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I'm a {props.age} years old.&nbsp;
        <span>{props.children}</span>
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;

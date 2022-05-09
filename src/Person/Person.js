import React from "react";
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm a {props.age} years old.&nbsp;
        <span>{props.children}</span>
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;

import React from "react";

const Person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I'm a {props.age} years old.&nbsp;
        <span>{props.children}</span>
      </p>
    </div>
  );
};

export default Person;

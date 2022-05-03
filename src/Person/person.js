import React from "react";

const Person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I'm a {props.age} years old.&nbsp;
        <span>{props.children}</span>
      </p>
    </div>
  );
};

export default Person;

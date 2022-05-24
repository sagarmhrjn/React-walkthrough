import React from "react";

const validation = (props) => {
  let validationMessage = "Text long enough";

  const inputLength = props.inputLength;
  if (inputLength < 5) {
    validationMessage = "Text too short";
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;

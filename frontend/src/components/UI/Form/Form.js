import React, { useState } from "react";
import Button from "../Button/Button";

import "./Form.css";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");

  const updateInputValue = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const onSubmitClick = () => {
    // console.log("inputValue", inputValue);
    props.addToListHandler(inputValue);
    setInputValue("");
  };

  return (
    <React.Fragment>
      <input type="text" value={inputValue} onChange={updateInputValue}></input>
      <Button type="normal" onClick={onSubmitClick}>
        Submit
      </Button>
    </React.Fragment>
  );
};

export default Form;

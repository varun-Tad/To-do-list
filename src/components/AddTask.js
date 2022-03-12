import React, { useState } from "react";

import "./AddTask.css";

const AddTask = (props) => {
  const [textInput, setTextInput] = useState();
  const inputChangeHandler = (event) => {
    setTextInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSendTask(textInput);
    setTextInput("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        value={textInput}
        className="input-contain"
        type="text"
        placeholder="Add a todo"
        onChange={inputChangeHandler}
      ></input>
      <button className="submit-btn" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default AddTask;

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
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
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

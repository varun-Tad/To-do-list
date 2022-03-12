import React, { useState } from "react";

import "./AddTask.css";

const AddTask = (props) => {
  const [textInput, setTextInput] = useState(" ");
  const [error, setError] = useState(" ");
  const inputChangeHandler = (event) => {
    setTextInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (textInput.trim().length === 0) {
      setError("Please enter a To-do");
    } else {
      props.onSendTask(textInput);
      setTextInput("");
      setError(" ");
    }
  };

  return (
    <div>
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
      <div>{error}</div>
    </div>
  );
};

export default AddTask;

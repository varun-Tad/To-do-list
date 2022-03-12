import React, { useState } from "react";
import AddTask from "./components/AddTask";
import AddToList from "./components/AddToList";

function App() {
  const [theInput, setTheInput] = useState([]);
  const sendtaskHandler = (data) => {
    setTheInput((prevInput) => {
      return [data, ...prevInput];
    });
  };

  return (
    <div className="task-container">
      <h2>What's the Plan for Today ?</h2>
      <AddTask onSendTask={sendtaskHandler}></AddTask>
      <AddToList inputList={theInput}></AddToList>
    </div>
  );
}

export default App;

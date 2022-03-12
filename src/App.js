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

  const closingText = (theIndexSent) => {
    setTheInput((prevInput) => {
      const updatedItems = prevInput.filter(
        (item, index) => index !== theIndexSent
      );
      return updatedItems;
    });
  };
  return (
    <div className="task-container">
      <h2>What's the Plan for Today ?</h2>
      <AddTask onSendTask={sendtaskHandler}></AddTask>
      <AddToList onClosing={closingText} inputList={theInput}></AddToList>
    </div>
  );
}

export default App;

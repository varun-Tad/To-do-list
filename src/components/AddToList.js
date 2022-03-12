import React from "react";
import "./AddToList.css";

const AddToList = (props) => {
  const colorArr = [
    "#fcec03",
    "#fc0373",
    "#fc6f03",
    "#0341fc",
    "#32a852",
    "#3275a8",
    "#66FF00",
    "#0095f2",
    "#08E8DE",
  ];

  const closeHandler = (sentIndex) => {
    props.onClosing(sentIndex);
  };

  return (
    <div>
      <ul>
        {props.inputList.map((item, index) => {
          return (
            <li
              style={{
                background: colorArr[Math.floor(Math.random() * 8) + 1],
              }}
              key={index}
            >
              {item}
              <button onClick={() => closeHandler(index)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AddToList;

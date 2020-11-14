import React from "react";
import "./toDoList.css";
const ToDOList = (props) =>
  props.toDoList.map((list) => (
    <li className="to-do-list" key={list.key}>
      {list.text}{" "}
      <span onClick={props.removeList} id={list.key} className="remove-link">
        Remove
      </span>
    </li>
  ));

export default ToDOList;

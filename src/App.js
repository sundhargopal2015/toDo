import React, { useState } from "react";
import "./App.css";
import ToDOList from "./toDoList";

function App() {
  const [toDoLists, addToDoLists] = useState([]);

  const [toDoList, addToDoList] = useState("");
  const handleAddToDoList = (event) => {
    event.preventDefault();
    const newList = {
      text: toDoList,
      key: Date.now()
    };
    addToDoLists((state) => state.concat(newList));
    addToDoList("");
  };

  const getListIndex = (id) => {
    let listIndex = 0;
    for (let i = 0; i < toDoLists.length; i++) {
      if (toDoLists[i].key.toString() === id) {
        listIndex = i;
        break;
      }
    }

    return listIndex;
  };

  const removeList = (event) => {
    const removeToDoListIndex = getListIndex(event.target.id);
    addToDoLists((state) =>
      state.filter((list, index) => index !== removeToDoListIndex)
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleAddToDoList}>
        Add To DO:{" "}
        <input
          type="text"
          value={toDoList}
          onChange={(event) => addToDoList(event.target.value)}
        />
        <input type="submit" name="submit" />
      </form>
      {toDoLists.length > 0 && (
        <ToDOList toDoList={toDoLists} removeList={removeList} />
      )}
    </div>
  );
}

export default App;

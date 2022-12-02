import { useState } from "react";
import style from "./todo.css";

function TodoComp() {
  const [taskName, setTaskName] = useState();
  const [taskItems, setTaskItems] = useState([]);

  function addTask() {
    if (taskName === "" || taskName === undefined) {
      alert("Please enter item");
    } else {
      setTaskItems([...taskItems, taskName]);
      setTaskName("");
    }
  }

  function deleteItem(item) {
    console.log(item);
    const updatedTaskItems = taskItems.filter((task) => task !== item);
    setTaskItems(updatedTaskItems);
  }

  function clearAllTasks() {
    setTaskItems([]);
  }

  console.log(taskName);
  console.log(taskItems);

  return (
    <>
      <div className="app-wrapper">
        <div className="content-wrapper">
          <div className="app-head">MY TO-DO LIST</div>
          <div className="input-wrapper">
            <input
              type="text"
              className="input-box"
              value={taskName || ""}
              placeholder="✍ Please type here"
              onChange={(e) => setTaskName(e.target.value)}
            />
            <i
              className="fa fa-plus-square icon-style"
              aria-hidden="true"
              onClick={addTask}
            ></i>
          </div>
          <div className="list-items">
            {taskItems.map((item) => {
              return (
                <div className="each-item" key={taskItems.indexOf(item) + 1}>
                  <div className="item-name">
                    {`${taskItems.indexOf(item) + 1}. ${item}`}
                  </div>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => deleteItem(item)}
                  ></i>
                </div>
              );
            })}
          </div>
          <button className="clear-btn" onClick={clearAllTasks}>
            Clear All Task
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoComp;

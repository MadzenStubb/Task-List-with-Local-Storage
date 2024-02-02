import React from "react";
import "../StyleSheets/Task.css";
import { BsFillTrashFill } from "react-icons/bs";

const Task = ({ id, text, finished, deleteTask, finishTask }) => {
  return (
    <main className={finished ? "task-container finished" : "task-container"}>
      <div className="task-text" onClick={() => finishTask(id)}>
        {text}
      </div>
      <div className="task-icon-container" onClick={() => deleteTask(id)}>
        <BsFillTrashFill className="task-icon" />
      </div>
    </main>
  );
};

export default Task;

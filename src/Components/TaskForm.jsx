import React, { useState } from "react";
import "../StyleSheets/TaskForm.css";
import {v4 as uuidv4} from 'uuid';

const TaskForm = (props) => {

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending Form')

    const newTask = {
      id: uuidv4(),
      text: input,
      finished: false,
    }

    props.onSubmit(newTask);
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Write a task"
        name="text"
        onChange={handleChange}
      />
      <button className="task-button" type="submit">Add</button>
    </form>
  );
};

export default TaskForm;

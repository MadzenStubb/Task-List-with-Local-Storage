import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import "../StyleSheets/TaskList.css";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = getSavedTasks();
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
    }
  };

  const getSavedTasks = () => {
    const tasksJSON = localStorage.getItem("tasks");
    return tasksJSON ? JSON.parse(tasksJSON) : [];
  };

  const saveTasksToLocalStorage = (tasksToSave) => {
    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const finishTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.finished = !task.finished;
      }
      return task;
    });
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="task-list-container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            finished={task.finished}
            deleteTask={deleteTask}
            finishTask={finishTask}
            task={task}
          />
        ))}
      </div>
    </>
  );
};

export default TaskList;

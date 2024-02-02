import React from "react";
import "./App.css";
import LogoBaller from "./LogoBaller";
import TaskList from "./Components/TaskList";

const App = () => {

  return (
    <main className="tasksApp">
      <LogoBaller />
      <section className="main-tasks-list">

        <h1>My Tasks</h1>
        <TaskList />
      </section>
    </main>
  );
};

export default App;

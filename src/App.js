import React, { Component } from "react";
import TasksConatiner from "./containers/tasksConatiner";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasksConatiner />
      </div>
    );
  }
}

export default App;

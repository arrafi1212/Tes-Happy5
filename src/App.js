import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App flex">
      <Navbar />
      <div className="w-full p-10">
        <h1 className="font-semibold text-2xl mb-4">Product Roadmap</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;

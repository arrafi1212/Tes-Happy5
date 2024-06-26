import "./App.css";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";
import card1 from "./data/card1.json";
import card2 from "./data/card2.json";
import card3 from "./data/card3.json";
import card4 from "./data/card4.json";

function App() {
  return (
    <div className="App flex font-sans">
      <Navbar />
      <div className=" p-10">
        <h1 className="font-semibold text-2xl text-gray-2bold mb-4">
          Product Roadmap
        </h1>
        <div className="List-task flex gap-4">
          <TaskList data={card1} />
          <TaskList data={card2} />
          <TaskList data={card3} />
          <TaskList data={card4} />
        </div>
      </div>
    </div>
  );
}

export default App;

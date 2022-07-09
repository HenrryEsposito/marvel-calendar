import React from "react";
import Calendar from "./components/organisms/Calendar";

function App() {
  return (
    <div className="App">
      <h1>Marvel Calendar</h1>
      <button
        onClick={() => {
          alert("Assemble!!!");
        }}
      >
        Avengers?
      </button>
      <Calendar></Calendar>
    </div>
  );
}

export default App;

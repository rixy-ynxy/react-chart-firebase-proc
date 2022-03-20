import React from 'react';
import './App.css';
import LinePlot from "./components/LinePlot";
import RadarPlot from "./components/RadarPlot";


function App() {
  return (
    <div className="App">
      <LinePlot />
      <RadarPlot />
    </div>
  )
}

export default App;

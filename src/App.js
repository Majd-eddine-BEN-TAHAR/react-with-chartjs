import React, { useState, useRef } from "react";
import MyChart from "./components/MyChart/MyChart";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const canvas = useRef(null);
  const [chartType, setChartType] = useState(0);
  const changeChartType = () => {
    if (chartType > 3) {
      setChartType(0);
    } else {
      setChartType((prev) => prev + 1);
    }
  };
  return (
    <div className="container">
      <h1>ReactJS + ChartJS</h1>
      <MyChart canvas={canvas} type={chartType} />
      <Button clicked={changeChartType}>change</Button>
    </div>
  );
}

export default App;

import "./App.css";
import { svg } from "./utils";

import { useState } from "react";

function App() {
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [scale, setScale] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        {svg(rotationDegrees, translateX, translateY, scale)}
        <div>
          <h2>Rotation</h2>
          <input
            type="range"
            min="0"
            max="270"
            value={rotationDegrees}
            step="90"
            onChange={(e) => {
              setRotationDegrees(e.target.value)
            }}
          ></input>
        </div>

        <div>
          <h2>Translate X</h2>
          <input
            type="range"
            min="-1000"
            max="1000"
            value={translateX}
            step="1"
            onChange={(e) => {
              setTranslateX(e.target.value)
            }}
          ></input>
        </div>

        <div>
          <h2>Translate Y</h2>
          <input
            type="range"
            min="-1000"
            max="1000"
            value={translateY}
            step="1"
            onChange={(e) => {
              setTranslateY(e.target.value)
            }}
          ></input>
        </div>

        <div>
          <h2>Scale</h2>
          <input
            type="range"
            min="1"
            max="10"
            value={scale}
            step=".1"
            onChange={(e) => {
              setScale(e.target.value)
            }}
          ></input>
        </div>
      </header>
    </div>
  );
}

export default App;

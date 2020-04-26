import React from "react";
import "./reset.css";
import Canvas from "./component/canvas";

const App = () => {
  return (
    <div>
      <Canvas width={500} height={500}></Canvas>
    </div>
  );
};

export default App;

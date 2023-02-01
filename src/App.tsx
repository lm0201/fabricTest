import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { fabric } from "fabric";

function App() {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    const rect = new fabric.Rect({
      top: 20,
      left: 20,
      width: 20,
      height: 20,
      fill: "green",
    });

    //canvas.add();
    const Circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 100,
      top: 100,
    });
    canvas.add(rect, Circle);
    rect.animate(
      { top: 50, left: 400, angle: 45 },
      { duration: 1000, onChange: canvas.renderAll.bind(canvas) }
    );
  }, []);
  return <canvas id="canvas" width="1000px" height="1000px"></canvas>;
}

export default App;

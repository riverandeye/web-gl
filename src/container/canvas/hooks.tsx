import { useState, useEffect } from "react";
import CanvasContext from "./model/canvas-context";
import { ContextMode } from "../../constant/canvas";
import { drawOnMouseMove } from "../../lib/canvas/event";

export const useCanvas = (id: string) => {
  const [canvas, setCanvas] = useState(null as HTMLCanvasElement);
  const [canvasContext, setCanvasContext] = useState(
    new CanvasContext("black", 1, ContextMode.draw, false)
  );

  useEffect(() => {
    setCanvas(document.getElementById(id) as HTMLCanvasElement);
  }, [id]);

  // initialize context
  useEffect(() => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = canvasContext.color;
    ctx.strokeStyle = canvasContext.color;
    ctx.lineWidth = canvasContext.size;
  }, [canvasContext.color, canvasContext.mode, canvasContext.size]);

  const changeColor = (color: string) => setCanvasContext({...canvasContext, color}); // prettier-ignore
  const changeSize = (size: number) => setCanvasContext({...canvasContext, size }); // prettier-ignore
  const changeMode = (mode: ContextMode) => setCanvasContext({...canvasContext, mode }); // prettier-ignore
  const startPainting = () => setCanvasContext({ ...canvasContext, begin: true }); // prettier-ignore
  const stopPainting = () => setCanvasContext({ ...canvasContext, begin: false }); // prettier-ignore
  const isDrawable = () => canvasContext.mode === "draw" && canvasContext.begin;
  const handleMouseMove = (e) => {
    e.persist();
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    drawOnMouseMove(e, ctx, isDrawable);
  };

  // add eventListener
  return {
    canvasContext,
    changeColor,
    startPainting,
    stopPainting,
    handleMouseMove,
  };
};

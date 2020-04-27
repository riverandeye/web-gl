import * as S from "./styles";
import React from "react";
import { useCanvas } from "./hooks";
import ColorBar from "../color-bar";
import OptionBar from "../option-bar";

interface CanvasProps {
  width: number;
  height: number;
  id: string;
}

const Canvas: React.FC<CanvasProps> = ({ width, height, id }) => {
  const {
    canvasContext,
    changeColor,
    startPainting,
    stopPainting,
    handleMouseMove,
  } = useCanvas(id);

  console.log(canvasContext);

  return (
    <S.Canvas width={width} height={height} border={30}>
      <ColorBar changeColor={changeColor} />
      <S.Screen
        id={id}
        width={width}
        height={height}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
        onMouseDown={startPainting}
        onMouseMove={handleMouseMove}
      ></S.Screen>
      <OptionBar />
    </S.Canvas>
  );
};

export default Canvas;

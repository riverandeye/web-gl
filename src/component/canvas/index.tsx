import * as S from "./styles";
import React from "react";

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height }) => {
  return (
    <S.Canvas width={width} height={height} border={30}>
      <S.Screen width={width} height={height}></S.Screen>
    </S.Canvas>
  );
};

export default Canvas;

import React from "react";

import * as S from "./styles";
import { chunkArray } from "../../lib/array";
import { listOfColor } from "../../constant/color";
import ColorPicker from "../../component/color-picker";

interface ColorBarProps {
  changeColor: (color: string) => void;
}

const ColorBar: React.FC<ColorBarProps> = ({ changeColor }) => {
  return (
    <S.ColorBar>
      <S.ColorBarContainer backgroundColor={"#F9F6F7"}>
        {chunkArray(listOfColor, 2).map((colorArray: string[], idx: number) => (
          <S.ColorBarRowContainer key={idx}>
            {colorArray.map((color: string, idx: number) => (
              <ColorPicker
                color={color}
                key={idx}
                onClick={() => changeColor(color)}
              />
            ))}
          </S.ColorBarRowContainer>
        ))}
      </S.ColorBarContainer>
    </S.ColorBar>
  );
};

export default ColorBar;

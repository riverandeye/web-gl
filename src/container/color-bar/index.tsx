import React from "react";

import * as S from "./styles";
import ColorPicker from "../../component/color-picker";
import { chunkArray } from "../../lib/array";

const listOfColor = [
  "white",
  "silver",
  "gray",
  "black",
  "Red",
  "maroon",
  "yellow",
  "olive",
  "lime",
  "green",
  "aqua",
  "teal",
  "blue",
  "navy",
  "fuchisa",
  "purple",
];

const ColorBar = () => {
  return (
    <S.ColorBar>
      <S.ColorBarContainer backgroundColor={"#F9F6F7"}>
        {chunkArray(listOfColor, 2).map((colorArray: string[]) => (
          <S.ColorBarRowContainer>
            {colorArray.map((color: string) => (
              <ColorPicker color={color} />
            ))}
          </S.ColorBarRowContainer>
        ))}
      </S.ColorBarContainer>
    </S.ColorBar>
  );
};

export default ColorBar;

import React from "react";

import * as S from "./styles";

interface ColorPickerProps {
  color: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color }) => {
  return <S.ColorPicker color={color}></S.ColorPicker>;
};

export default ColorPicker;

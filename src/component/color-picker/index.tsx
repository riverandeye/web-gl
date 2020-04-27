import React from "react";

import * as S from "./styles";

interface ColorPickerProps {
  color: string;
  onClick: () => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onClick }) => {
  return <S.ColorPicker color={color} onClick={onClick}></S.ColorPicker>;
};

export default ColorPicker;

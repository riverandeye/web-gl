import styled from "styled-components/macro";

interface ColorPickerProps {
  color: string;
}

export const ColorPicker = styled.div<ColorPickerProps>`
  background-color: ${(props) => props.color};

  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

import styled from "styled-components/macro";

interface CanvasProps {
  width: number;
  height: number;
  border: number;
}

export const Canvas = styled.div<CanvasProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height + props.border}px`};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Screen = styled.canvas`
  background-color: white;
  border-radius: 1.5rem 1.5rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

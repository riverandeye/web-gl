import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-display:'block';
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    user-select : none;
    background-color: #F6F9FC;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

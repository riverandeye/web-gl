import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-display:'block';
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size : 10px;
  }
  
  body {
    user-select : none;
    background-color: #f6f9fc;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
    font-family: 'Inter', sans-serif;
    font-smooth: always;
  }
  body {
  height: 100vh;
    background: ${(props) => props.theme.colors.background};
  }
`;

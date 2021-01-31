import { createGlobalStyle } from "styled-components";
import { MainBackgroundColor, TextColor } from "./sharedStyles";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    ${MainBackgroundColor};
    font-family: 'Montserrat', sans-serif;
    color: white;
    transition: all .50s linear;
    padding: 0 10px;
  }

  html, body {
    height: 100%;
  }

  input {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: inherit;
    outline: none;
    border: none;
    color: white;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
  }

  h2, h3 {
    ${TextColor}
  }
`;

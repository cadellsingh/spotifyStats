import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background-color: black;
        color: white;
        transition: all .50s linear;
    }

    html, body {
        height: 100%;
    }
`;

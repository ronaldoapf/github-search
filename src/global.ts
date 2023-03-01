import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --bg-color: #232324;
    --dark-color: #201F1F;
    --purple: #8752CC;
    --gray: #B2B2B2;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--bg-color);
  }
`
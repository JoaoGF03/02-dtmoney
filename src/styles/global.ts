import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-light: #6933ff;
    --text-body: #363f5f;
    --shape: #ffffff;
    --background: #f0f2f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size:93.75%large;
    }

    @media (max-width: 720px){
      font-size:87.5%large;
    }
  }

  body {
    background: --background;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`
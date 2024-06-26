import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 16px 'Roboto', sans-serif;
  }

`

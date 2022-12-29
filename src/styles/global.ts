import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}


@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background-color: ${({ theme }) => theme.colors['base-background']};
  color: ${({ theme }) => theme.colors['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, select, button {
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-oppearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-oppearance: textfield;
}

::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-button"]}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["brand-purple"]}
  }
`
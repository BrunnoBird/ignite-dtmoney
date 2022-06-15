import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;
  
    --text-title: #363f5f;
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //Fontes acessiveis para determinados dispositivos
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    //para as fonts ficarem mais nitidas em navegadores engine chrome
    -webkit-font-smoothing: antialiased;
  }

  //input, textarea, button por default eles não importão as fontes do body do HTML
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  //componentes disable vão ter esses styles default
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
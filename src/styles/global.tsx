
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --white: #fff;
    --background: #F2F3F5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
  }
  /* @media(min-width: 1920px){
    html {
      font-size: 133%; //21.33px
    }
  } */

  @media(max-width: 1080px){
    html {
      font-size: 93.75%; //15px
    }
  }
  /* @media(max-height: 660px){
    html {
      font-size: 30%; //15px
    }
  } */
  @media(max-width: 720px){
    html {
      font-size: 87.5%; //14px
    }
  }
  /* @media(max-width: 632px){
    html {
      font-size: 50%; //12px
    }
  }
  @media(max-width: 420px){
    html {
      font-size: 42%; //6.72px
    }
  } */

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`

export default GlobalStyle;
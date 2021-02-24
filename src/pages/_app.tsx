import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #E5E5E5;
    color: #666666;
  }

  body, input, textarea, button {
    font: 400 16px "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`

function MyApp({ Component, pageProps }) {
  return (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp

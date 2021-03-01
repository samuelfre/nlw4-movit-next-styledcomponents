import GlobalStyle from "../styles/global"

import { ChallengesProvider } from '../contexts/ChallengesContext'
import React from "react"
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session} >
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

import GlobalStyle from "../styles/global"

import React from "react"
import { Provider } from "next-auth/client"
import { LateralProvider } from "../contexts/LateralBarContext"

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session} >
      <GlobalStyle />
      <LateralProvider>
        <Component {...pageProps} />
      </LateralProvider>
    </Provider>
  )
}

export default MyApp

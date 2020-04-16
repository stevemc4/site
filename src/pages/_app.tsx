import React from 'react'
import Head from 'next/head'
import { NextComponentType } from 'next'
import { createGlobalStyle } from 'styled-components'

import 'normalize.css'

const Global = createGlobalStyle`

  body {
    background: #ffffff;
    color: #2d2d2d;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;
    margin: 0px;
  }
`

function App ({ Component, pageProps }: {Component: NextComponentType; pageProps: unknown}): React.ReactElement {
  return (
    <>
      <Global />
      <Head>
        <title>Dhika Rizky</title>
        <meta name="description" content="Hi There! I’m Dhika Rizky, a frontend engineer and a big weeb" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App

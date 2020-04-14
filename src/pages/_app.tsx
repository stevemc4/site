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
    max-width: 640px;
    width: 100%;
    display: flex;
    margin: 96px auto auto 256px;
    box-sizing: border-box;

    @media (max-width: 1152px) {
      margin: 96px auto;
    }

    @media (max-width: 832px) {
      margin: 96px;
    }

    @media (max-width: 768px) {
      margin: 0px;
      padding: 96px 48px;
    }

    @media (max-width: 480px) {
      padding: 96px 32px;
    }
  }
`

function App ({ Component, pageProps }: {Component: NextComponentType; pageProps: unknown}): React.ReactElement {
  return (
    <>
      <Global />
      <Head>
        <title>Dhika Rizky</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App

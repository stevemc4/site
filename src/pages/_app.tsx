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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Dhika Rizky</title>
        <meta name="description" content="Hi There! I’m Dhika Rizky, a frontend engineer and a big weeb" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App

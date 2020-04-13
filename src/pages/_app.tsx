import React from 'react'
import Head from 'next/head'
import { NextComponentType } from 'next'

import 'normalize.css'

function App({ Component, pageProps }: {Component: NextComponentType, pageProps: any}) {
  return (
    <>
      <Head>
        <title>Dhika Rizky</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App

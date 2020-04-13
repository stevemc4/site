import React from 'react'
import Head from 'next/head'
import { NextComponentType } from 'next'
import { createGlobalStyle } from 'styled-components'

import 'normalize.css'
import { lightTheme, darkTheme } from '../styles/theme'

const Global = createGlobalStyle`
  html {
    --bgColor: ${lightTheme.colors.background};
    --bodyColor: ${lightTheme.colors.body};
    --headerFont: ${lightTheme.fonts.header};
    --chineseFont: ${lightTheme.fonts.chinese};
    --bodyFont: ${lightTheme.fonts.body};

    @media (prefers-color-scheme: dark) {
    --bgColor: ${darkTheme.colors.background};
    --bodyColor: ${darkTheme.colors.body};
    }
  }

  body {
    background: var(--bgColor);
    color: var(--bodyColor);
    padding: 64px;
    font-family: var(--bodyFont);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    box-sizing: border-box;
  
    @media (max-width: 960px) {
      padding: 32px;
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

import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'

const Greeting = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #636363;

  @media (prefers-color-scheme: dark) {
    color: #c4c4c4;
  }

  a {
    color: inherit;
  }
`

const Index = (): React.ReactElement => (
  <>
    <Navbar currentPage="HOME" />
    <Greeting>
      Hi There!<br />
      I’m Dhika, a frontend engineer and a big weeb<br/>
      <br />
      I also do things in <a href="https://github.com/ShioriLabs" target="_blank" rel="noopener noreferrer">Shiori Labs</a>, go check it out!
    </Greeting>
  </>
)

export default Index

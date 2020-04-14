import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'

const Greeting = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #636363;
`

const Index = (): React.ReactElement => (
  <>
    <Navbar />
    <Greeting>
      Hi There!<br />
      I’m Dhika, a frontend engineer and a big weeb
    </Greeting>
  </>
)

export default Index

import React from 'react'
import styled from 'styled-components'

import Layout from '../layout/Default'

import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'

const Subtitle = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #636363;
  display: block;
`

const Index = (): React.ReactElement => (
  <Layout>
    <Navbar />
    <section>
      <PageTitle>
        Stuffs
      </PageTitle>
      <Subtitle>
        a.k.a Things I love, recommend, or just something I want to share
      </Subtitle>
    </section>
  </Layout>
)

export default Index

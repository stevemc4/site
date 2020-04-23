import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Layout from '../layout/Default'

import Navbar from '../components/Navbar'

const Error404 = styled.h2`
  font-size: 48px;
  color: #2d2d2d;
  font-weight: 900;
  font-style: normal;
  margin: 0px;
`

const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 22px;
  margin: 0px;

  color: #636363;
`

const HomeLink = styled.a`
  color: #636363;
  text-decoration: none;

  &:hover {
    color: #2d2d2d;
  }
`

const NotFound = (): React.ReactElement => (
  <Layout>
    <Navbar />
    <section>
      <Error404>404 Not Found</Error404>
      <Description>
        This page doesn&apos;t exist.
      </Description>
    </section>
    <section>
      <Link href="/" passHref>
        <HomeLink>
          Back to Home
        </HomeLink>
      </Link>
    </section>
  </Layout>
)

export default NotFound

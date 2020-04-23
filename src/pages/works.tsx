import React from 'react'
import styled from 'styled-components'
import { Predicates } from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import ApiSearchResponse from 'prismic-javascript/d.ts/ApiSearchResponse'
import Head from 'next/head'

import Prismic from '../util/prismic'

import Layout from '../layout/Default'

import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import List, { ListItem } from '../components/List'

interface WorksProps {
  response: ApiSearchResponse;
}

const GithubLink = styled.a`
  color: #636363;
  text-decoration: none;

  &:hover {
    color: #2d2d2d;
  }
`

const Works = ({ response }: WorksProps): React.ReactElement => (
  <Layout>
    <Head>
      <title>Works - Dhika Rizky</title>
    </Head>
    <Navbar currentPage="WORKS" />
    <section>
      <PageTitle>Works</PageTitle>
    </section>
    <List>
      { response.results.map(item => {
        const title = PrismicDOM.RichText.asText(item.data.title)
        const url = PrismicDOM.Link.url(item.data.url)
        const desc = PrismicDOM.RichText.asText(item.data.description)
        return (
          <ListItem
            title={title}
            subtitle={url}
            description={desc}
            key={item.uid}
          />
        )
      })}
    </List>
    <section>
      <GithubLink
        href="https://github.com/stevemc4"
        target="_blank"
      >
        See More on GitHub
      </GithubLink>
    </section>
  </Layout>
)

export default Works

export async function getStaticProps (): Promise<{ props: WorksProps }> {
  const data = await Prismic().query(
    Predicates.at('document.type', 'work'),
    { orderings: '[document.first_publication_date desc]' }
  )
  return {
    props: {
      response: data
    }
  }
}

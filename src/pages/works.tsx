import React from 'react'
import styled from 'styled-components'
import P from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse'
import Head from 'next/head'

import Prismic from '../util/prismic'

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

  @media (prefers-color-scheme: dark) {
    color: #c4c4c4;

    &:hover {
      color: #ebebeb;
    }
  }
`

const Works = ({ response }: WorksProps): React.ReactElement => (
  <>
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
            action={url}
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
  </>
)

export default Works

export async function getStaticProps (): Promise<{ props: WorksProps }> {
  const data = await Prismic().query(
    P.Predicates.at('document.type', 'work'),
    { orderings: '[document.first_publication_date desc]' }
  )
  return {
    props: {
      response: data
    }
  }
}

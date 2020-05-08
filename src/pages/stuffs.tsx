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

const Subtitle = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #636363;
  display: block;
`

interface StuffsProps {
  response?: ApiSearchResponse;
}

const Stuffs = ({ response }: StuffsProps): React.ReactElement => (
  <Layout>
    <Head>
      <title>Stuffs - Dhika Rizky</title>
    </Head>
    <Navbar currentPage="STUFFS" />
    <section>
      <PageTitle>
        Stuffs
      </PageTitle>
      <Subtitle>
        a.k.a Things I love, recommend, or just something I want to share
      </Subtitle>
    </section>
    <List>
      {response.results.map(item => {
        const title = PrismicDOM.RichText.asText(item.data.title)
        const primarySubtitle = PrismicDOM.RichText.asText(item.data.primarysubtitle)
        const secondarySubtitle = PrismicDOM.RichText.asText(item.data.secondarysubtitle)
        const description = PrismicDOM.RichText.asText(item.data.comment)
        const action = PrismicDOM.Link.url(item.data.action)
        return (
          <ListItem
            title={title}
            subtitle={`${primarySubtitle}${secondarySubtitle !== '' ? ` · ${secondarySubtitle}` : ''}`}
            description={description}
            key={item.uid}
            tags={item.tags}
            action={action}
          />
        )
      })}
    </List>
  </Layout>
)

export async function getStaticProps (): Promise<{props: StuffsProps}> {
  const response = await Prismic().query(
    Predicates.at('document.type', 'stuffs'),
    { orderings: '[document.first_publication_date desc]' }
  )
  return {
    props: {
      response: response
    }
  }
}

export default Stuffs

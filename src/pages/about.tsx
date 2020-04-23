import React from 'react'
import styled from 'styled-components'
import PrismicDOM from 'prismic-dom'
import { Predicates } from 'prismic-javascript'
import { Document } from 'prismic-javascript/d.ts/documents'
import Head from 'next/head'

import Prismic from '../util/prismic'

import Layout from '../layout/Default'

import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import TwoColumnList from '../components/TwoColumnList'
import { ListItem } from '../components/List'

const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #636363;
`

interface AboutProps {
  document: Document;
  works: Document[];
}

const About = ({ document, works }: AboutProps): React.ReactElement => (
  <Layout>
    <Head>
      <title>About - Dhika Rizky</title>
    </Head>
    <Navbar currentPage="ABOUT" />
    <section>
      <PageTitle>
        About Me
      </PageTitle>
    </section>
    <Description>
      { PrismicDOM.RichText.asText(document.data.description)}
    </Description>
    <TwoColumnList title="Education">
      {document.data.education.map((edu): React.ReactElement => {
        const name = PrismicDOM.RichText.asText(edu.name)
        const major = PrismicDOM.RichText.asText(edu.major)
        const year = PrismicDOM.RichText.asText(edu.year)

        return (
          <ListItem
            title={name}
            subtitle={`${major} · ${year}`}
            key={name + ` [${year}]`}
          />
        )
      })}
    </TwoColumnList>
    <TwoColumnList title="Working Experience">
      {document.data.experience.map((exp): React.ReactElement => {
        const name = PrismicDOM.RichText.asText(exp.company)
        const role = PrismicDOM.RichText.asText(exp.role)
        const year = PrismicDOM.RichText.asText(exp.year)

        return (
          <ListItem
            title={name}
            subtitle={`${role} · ${year}`}
            key={name + ` [${year}]`}
          />
        )
      })}
    </TwoColumnList>
    {
      works.length > 0 && (
        <TwoColumnList title="Works">
          {works.map((work): React.ReactElement => {
            const title = PrismicDOM.RichText.asText(work.data.title)
            const url = PrismicDOM.Link.url(work.data.url)
            const desc = PrismicDOM.RichText.asText(work.data.description)

            return (
              <ListItem
                title={title}
                subtitle={`${url}`}
                description={desc}
                key={work.uid}
              />
            )
          })}
        </TwoColumnList>
      )
    }
  </Layout>
)

export default About

export async function getStaticProps (): Promise<{ props: AboutProps }> {
  const aboutPage = await Prismic().getSingle('about', {})
  const works = await Prismic().query(
    Predicates.at('document.type', 'work'),
    { orderings: '[document.first_publication_date desc]' }
  )
  return {
    props: {
      document: aboutPage,
      works: works.results
    }
  }
}

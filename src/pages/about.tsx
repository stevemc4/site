import React from 'react'
import styled from 'styled-components'
import PrismicDOM from 'prismic-dom'
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
}

const About = ({ document }: AboutProps): React.ReactElement => (
  <Layout>
    <Head>
      <title>About - Dhika Rizky</title>
    </Head>
    <Navbar />
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
  </Layout>
)

export default About

export async function getStaticProps (): Promise<{ props: AboutProps }> {
  const aboutPage = await Prismic().getSingle('about', {})
  return {
    props: {
      document: aboutPage
    }
  }
}

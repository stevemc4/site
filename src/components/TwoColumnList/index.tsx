import React from 'react'
import styled from 'styled-components'

import List from '../List'

const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #636363;
  margin: 0px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`

const Container = styled.div`
  display: flex;
  width: 100%;

  ${Title}, ${List} {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    ${Title}, ${List} {
      width: 100%;
    }
  }
`

interface TwoColumnListProps {
  title: string;
  children?: React.ReactElement | React.ReactElement[];
}

const TwoColumnList = ({ title, children }: TwoColumnListProps): React.ReactElement => (
  <Container>
    <Title>{title}</Title>
    <List>
      {children}
    </List>
  </Container>
)

export default TwoColumnList

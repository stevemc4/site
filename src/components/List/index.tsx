import React from 'react'
import styled from 'styled-components'

const List = styled.section`
`

const Item = styled.article`
  margin: 16px 0px;

  &:first-child {
    margin-top: 0px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #2D2D2D;
  margin: 0px;
`

const Subtitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #636363;
  margin: 4px 0px;
  margin-top: 0px;

  &:last-child {
    margin-bottom: 0px;
  }
`

const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #636363;
  margin: 8px 0px;

  &:last-child {
    margin-bottom: 0px;
  }
`

interface ListItemProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const ListItem = ({ title, subtitle, description }: ListItemProps): React.ReactElement => {
  return (
    <Item>
      <Title>{title}</Title>
      {(subtitle && <Subtitle>{subtitle}</Subtitle>)}
      {(description && <Description>{description}</Description>)}
    </Item>
  )
}

export default List
export { ListItem }

import React from 'react'
import styled from 'styled-components'

const List = styled.section`
`

const Item = styled.article`
  margin: 24px 0px;

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

const TagContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 8px 0px;

  &:last-child {
    margin-bottom: 0px;
  }

  display: flex;
`

const Tag = styled.li`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;

  color: #FFFFFF;
  padding: 4px;
  background: #2D2D2D;
  border-radius: 4px;
  text-transform: uppercase;
  margin: 0px 4px;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }
`

interface ListItemProps {
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
}

const ListItem = ({ title, subtitle, description, tags }: ListItemProps): React.ReactElement => {
  return (
    <Item>
      <Title>{title}</Title>
      {(subtitle && <Subtitle>{subtitle}</Subtitle>)}
      {(description && <Description>{description}</Description>)}
      {(tags && tags.length > 0 && <TagContainer>
        {tags.map(tag => <Tag key={`${title}_${tag}`}>{tag}</Tag>)}
      </TagContainer>)}
    </Item>
  )
}

export default List
export { ListItem }

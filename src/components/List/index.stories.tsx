import React from 'react'
import List, { ListItem } from '.'

export default {
  title: 'Components/List',
  component: List
}

export const Default = (): React.ReactElement => (
  <List>
    <ListItem title="This is a title" />
    <ListItem title="This is a title" subtitle="This is a subtitle" />
    <ListItem
      title="This is a title"
      subtitle="This is a subtitle"
      description="Lorem ipsum dolor sit amet"
    />
    <ListItem
      title="This is a title"
      subtitle="This is a subtitle"
      description="Lorem ipsum dolor sit amet"
      tags={['Tag 1', 'Tag 2']}
    />
  </List>
)

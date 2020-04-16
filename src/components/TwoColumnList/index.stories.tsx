import React from 'react'
import TwoColumnList from '.'
import { ListItem } from '../List'

export default {
  title: 'Components/Two Column List',
  component: TwoColumnList
}

export const Default = (): React.ReactElement => (
  <TwoColumnList title="Test List">
    <ListItem title="Test 1" description="Lorem ipsum" />
    <ListItem title="Test 2" />
    <ListItem title="Test 3" />
    <ListItem title="Test 4" />
  </TwoColumnList>
)

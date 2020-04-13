import React from 'react'

import { Name, Work, WorkPlace, WorkPosition, Social } from '../styles/style'

const Index = () => (
  <>
    <Name>
      Dhika Rizky
      <span className="chinese">古育琦</span>
    </Name>
    <Work>
      <WorkPosition>Lead Frontend Engineer</WorkPosition>
      <WorkPlace>at Kyou Hobby Shop</WorkPlace>
    </Work>
    <Social>
      <li>
        <a href="mailto:dhika@dhikarizky.me">mail</a>
      </li>
      <li>
          <a href="https://linkedin.com/in/stevemc4" rel="noopener noreferrer" target="_blank">linkedin</a>
      </li>
      <li>
          <a href="https://github.com/stevemc4" rel="noopener noreferrer" target="_blank">github</a>
      </li>
    </Social>
  </>
)

export default Index

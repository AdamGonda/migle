import React from 'react'
import { Wrapper } from './styles/Search'
import magnifying from './assets/magnifying glass icon.svg'

export default () => {
  return (
    <Wrapper>
      <input type="search" placeholder="Search" size="5" />
      <img alt="magnifying glass" src={magnifying} />
    </Wrapper>
  )
}





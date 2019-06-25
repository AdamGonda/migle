import React from 'react'
import { Wrapper } from './styles/Navbar'
import Left from './Left'
import PathNavigator from './PathNavigator'
import Right from './Right'

export default () => {
  return (
    <Wrapper>
      <Left />
      <PathNavigator />
      <Right />
    </Wrapper>
  )
}

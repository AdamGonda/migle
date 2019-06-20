import React from 'react'
import Style from 'styled-components'
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

const Wrapper = Style.div`
  padding: 0px 0px 0px 0px;
  background-color: #0094FF;
  height: 5.8vw;
  color: white;
  font-size:44px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 52px;
  padding-right: 52px;
`

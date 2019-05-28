import React from 'react'
import Style from 'styled-components'
import Search from './Search'

export default () => {
  return (
    <Wrapper>
      <a href="/">migle</a>
      <Search />
    </Wrapper>
  )
}

const Wrapper = Style.div`
  display: flex;
  align-items: center;
  
  a:link {
      text-decoration: none;
    }
  
  a:visited {
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: none;
  }
  
  a:active {
    text-decoration: none;
  }
  
  a {
    color: white;
    margin-top: -7px;
    font-weight: 600;
    font-size: 42px;
  }
`

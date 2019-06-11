import React from 'react'
import Style from 'styled-components'
import ScrollImg from './assets/scroll.svg'

export default () => {
  return <Wrapper src={ScrollImg} />
}

const Wrapper = Style.img`
  grid-row: 10;
  width: 20px;
  align-self: center;
  animation: bounce infinite ease-in-out 2.5s;


  @keyframes bounce {
    0% {
      transform: translate(0px, 0px);
      opacity: 0;
    }

    50% {
      transform: translate(0px, 10px);
      opacity: 1;
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 0;
    }
  }
`

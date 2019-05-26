import React from 'react'
import Style from 'styled-components'
import mainBtn from './assets/main button icon.svg';
import teamBtn from './assets/team icon.svg';
import messageBtn from './assets/messages icon.svg';

export default () => {
  return (
    <Wrapper>
      <MessageBtn alt="message" src={messageBtn} />
      <TeamBtn alt="team" src={teamBtn} />
      <MainBtn alt="main" src={mainBtn} />
    </Wrapper>
  )
}

const spaceBetween = 35

const Wrapper = Style.div`
  display: flex;
  align-items: center;
`

const MessageBtn = Style.img`
  width: 34px;
  margin-bottom: -5px;
  margin-left: ${spaceBetween}px;
`

const TeamBtn = Style.img`
  width: 40px;
  margin-left: ${spaceBetween}px;
`

const MainBtn = Style.img`
  width: 44px;
  margin-left: ${spaceBetween}px;
`


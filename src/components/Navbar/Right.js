import React from 'react'
import { Wrapper, MessageBtn, TeamBtn, MainBtn } from './styles/Right'
import mainBtn from './assets/main button icon.svg'
import teamBtn from './assets/team icon.svg'
import messageBtn from './assets/messages icon.svg'

export default () => {
  return (
    <Wrapper>
      <MessageBtn alt="message" src={messageBtn} />
      <TeamBtn alt="team" src={teamBtn} />
      <MainBtn alt="main" src={mainBtn} />
    </Wrapper>
  )
}

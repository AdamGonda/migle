import React from 'react'
import { Wrapper, SignOutBtn, MessageBtn, TeamBtn, MainBtn } from './styles/Right'
import mainBtn from './assets/main button icon.svg'
import teamBtn from './assets/team icon.svg'
import messageBtn from './assets/messages icon.svg'

export default ({ signOut }) => {
  return (
    <Wrapper>
      {/* <MessageBtn alt="message" src={messageBtn} />
      <TeamBtn alt="team" src={teamBtn} />
      <MainBtn alt="main" src={mainBtn} /> */}
      <SignOutBtn onClick={signOut}>
        Sign out
      </SignOutBtn>
    </Wrapper>
  )
}

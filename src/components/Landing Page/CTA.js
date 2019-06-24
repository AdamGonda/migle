import React from 'react'
import { PrimaryBtn, SubTitleLikeBtn } from '../shared styles/buttons'
import { Wrapper, Bottom } from './styles/CTA'

export default ({ signUpBtnAction, loginBtnAction }) => (
  <Wrapper>
    <PrimaryBtn  onClick={signUpBtnAction}>Sign up</PrimaryBtn >
    <Bottom>
      <span>
        or <SubTitleLikeBtn style={{padding: '8px 15px 10px 2px'}} onClick={loginBtnAction}>login</SubTitleLikeBtn>
      </span>
    </Bottom>
  </Wrapper>
)

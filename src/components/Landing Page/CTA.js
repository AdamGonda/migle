import React from 'react'
import { PrimaryBtn, SubTitleLikeBtn } from '../shared styles/buttons'
import Style from 'styled-components'

export default ({ signUpBtnAction, loginBtnAction }) => (
  <Wrapper>
    <PrimaryBtn  onClick={signUpBtnAction}>Sign up</PrimaryBtn >
    <Bottom>
      <br />
      <span>
        or <SubTitleLikeBtn style={{padding: '8px 15px 10px 2px'}} onClick={loginBtnAction}>login</SubTitleLikeBtn>
      </span>
    </Bottom>
  </Wrapper>
)

const Wrapper = Style.div`
  color:white;
  grid-row: 9 / 10;
  align-self: end;

  animation: showUp 1.5s ease-in;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const Bottom = Style.div`
  padding-left: 10px;
  font-size: 13px;
  width: 100px;
  display: flex;
  justify-content: center;

  span {
    margin: 0px auto;
    color: white;
    display: inline-block;
    margin: 0px auto;
  }
`

import React from 'react'
import Style from 'styled-components'

export default ({signUpAction, loginAction}) => (
  <Wrapper>
    <SignUp onClick={signUpAction}>Sign up</SignUp>
    <Bottom>
      <br />
      <span>
        or <Login onClick={loginAction}>login</Login>
      </span>
    </Bottom>
  </Wrapper>
)

const SignUp = Style.button`
  width: 110px;
  font-size: 24px;
  border: none;
  background-color: white;
  padding: 8px 10px 10px 10px;
  border-radius: 3px;
  color: #2D4D60;
  font-size: 17px;
  font-weight: 700;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`

const Login = Style.button`
  width: auto;
  font-size: 15px;
  border: none;
  background-color: rgba(0,0,0,0);
  padding: 8px 15px 10px 2px;
  border-radius: 5px;
  color: white;
  font-weight: 400;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`

const Wrapper = Style.div`
  color:white;
  grid-row: 9 / 10;
  align-self: end;
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

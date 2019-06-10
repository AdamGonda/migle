import React from 'react'
import Style from 'styled-components'

export default () => (
  <Wrapper>
    <SignUp>Sign up</SignUp>
    <Login>
      <br />
      <span>
        or <button>login</button>
      </span>
    </Login>
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

const Wrapper = Style.div`
  color:white;
  grid-row: 9 / 10;
  align-self: end;
`

const Login = Style.div`
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

  button {
    width: auto;
    font-size: 15px;
    border: none;
    background-color: rgba(0,0,0,0);
    padding: 8px 15px 10px 2px;
    border-radius: 5px;
    color: white;
    font-weight: 400;
  }

  button:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
`

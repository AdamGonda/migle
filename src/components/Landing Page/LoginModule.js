import React from 'react'
import Style from 'styled-components'

const Login = ({ dispatchAction, backToLandigPage }) => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Wrapper>
      <div>
        <h1>Login</h1>
        <label>email:</label>
        <input type="text" name="email" onChange={handleChange} />
        <label>password: </label>
        <input type="password" name="password" onChange={handleChange} />
        <LoginBtn onClick={dispatchAction(credentials)}>Login</LoginBtn>
        <BackBtn onClick={backToLandigPage} >Go back</BackBtn>
      </div>
    </Wrapper>
  )
}

export default Login

const Wrapper = Style.div`
  display: grid;
  justify-items: center;
  align-self: center;
  font-size: 15px;
  color: white;
  animation: showUp 0.4s ease-in;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  div {
    width: 200px ;
    display: grid;
    justify-items: center;
    align-self: center;
    grid-gap: 10px;
  }

  h1 {
    font-size: 35px;
  }

  input, button {
    display: block;
  }

  input {
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    
  }
`

const LoginBtn = Style.button`
  margin-top: 45px;
  width: 80px;
  font-size: 24px;
  border: none;
  background-color: white;
  padding: 8px 10px 10px 10px;
  border-radius: 3px;
  color: #2D4D60;
  font-size: 17px;
  font-weight: 600;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`

const BackBtn = Style.button`
  font-size: 12px !important;
  border: none;
  background: rgba(0,0,0,0) !important;
  color: white;
  font-size: 25px;
  font-weight: 200;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

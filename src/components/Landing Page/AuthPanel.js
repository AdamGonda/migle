import React from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'

const AuthPanel = ({
  title,
  inputItems,
  dispatchAction,
  backToLandigPage,
  authError
}) => {
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
        <h1>{title}</h1>
        {inputItems.map(item => (
          <input
            name={item.name}
            type={item.type}
            placeholder={item.placeholder}
            onChange={handleChange}
          />
        ))}
        {<AuthError>{authError && authError.message}</AuthError>}
        <Submit onClick={dispatchAction(credentials)}>Submit</Submit>
        <BackBtn onClick={backToLandigPage}>Go back</BackBtn>
      </div>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  }
}

export default connect(
  mapStateToProps,
  null
)(AuthPanel)

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
    text-align: center;
  }

  input {
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    
  }
`
const AuthError = Style.div`
  font-size: 13px;
  color:yellow;
  font-weight: 600;
  text-align: center;
`

const Submit = Style.button`
  margin-top: 45px;
  font-size: 24px;
  border: none;
  background-color: white;
  padding: 8px 15px 10px 15px;
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
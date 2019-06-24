import React from 'react'
import Style from 'styled-components'
import { PrimaryBtn, SubTitleLikeBtn } from '../shared styles/buttons'
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
        <PrimaryBtn
          style={{ marginTop: '45px', width: '90px' }}
          onClick={dispatchAction(credentials)}
        >
          Submit
        </PrimaryBtn>
        <SubTitleLikeBtn
          style={{ fontSize: '12px', fontWeight: '200' }}
          onClick={backToLandigPage}
        >
          Go back
        </SubTitleLikeBtn>
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

  input {
    display: block;
    text-align: center;
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

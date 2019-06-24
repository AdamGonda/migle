import React from 'react'
import { PrimaryBtn, SubTitleLikeBtn } from '../shared styles/buttons'
import { Wrapper, AuthError } from './styles/AuthPanel'
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
        {authError && <AuthError>{authError.message}</AuthError>}
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

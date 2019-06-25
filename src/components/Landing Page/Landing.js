import React from 'react'
import {Wrapper} from './styles/Landing'
import Hero from './Hero'
import CTA from './CTA'
import Scroll from './Scroll'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/auth'
import { signUp } from '../../redux/actions/auth'
import AuthPanel from './AuthPanel'

const Landing = ({ signIn, signUp }) => {
  const [showSignUpPanel, setShowSignUpPanel] = React.useState(false)
  const [showLoginPanel, setShowLoginPanel] = React.useState(false)
  const LOGIN = 'LOGIN'
  const SIGN_UP = 'SIGN_UP'
  const LANDING = 'LANDING'
  const AuthPanelTitles = {login: 'Login', signUp: 'Sign up!'}

  const switchViewTo = name => () => {
    switch (name) {
      case LOGIN:
        setShowLoginPanel(true)
        setShowSignUpPanel(false)
        break

      case SIGN_UP:
        setShowLoginPanel(false)
        setShowSignUpPanel(true)
        break

      case LANDING:
        setShowLoginPanel(false)
        setShowSignUpPanel(false)
        break
    }
  }

  return (
    <Wrapper>
      {!showLoginPanel && !showSignUpPanel ? (
        <>
          <Hero title={'fun, easy'} subtitle={'project management'} />
          <CTA
            loginBtnAction={switchViewTo(LOGIN)}
            signUpBtnAction={switchViewTo(SIGN_UP)}
          />
          <Scroll />
        </>
      ) : null}

      {showLoginPanel && !showSignUpPanel ? (
        <AuthPanel
          title={AuthPanelTitles.login}
          inputItems={[
            {
              type: 'text',
              name: 'email',
              placeholder: 'Email'
            },
            {
              type: 'password',
              name: 'password',
              placeholder: 'Password'
            }
          ]}
          dispatchAction={signIn}
          backToLandigPage={switchViewTo(LANDING)}
        />
      ) : null}

      {showSignUpPanel && !showLoginPanel ? (
        <AuthPanel
        title={AuthPanelTitles.signUp}
        inputItems={[
          {
            type: 'text',
            name: 'firstName',
            placeholder: 'First name'
          },
          {
            type: 'text',
            name: 'lastName',
            placeholder: 'Last name'
          },
          {
            type: 'text',
            name: 'email',
            placeholder: 'Email'
          },
          {
            type: 'password',
            name: 'password',
            placeholder: 'Password'
          }
        ]}
        dispatchAction={signUp}
        backToLandigPage={switchViewTo(LANDING)}
      />
      ) : null}
    </Wrapper>
  )
}

const mapDStatetoProps = state => {
  return {}
}

const mapDispatchtoProps = dispatch => {
  return {
    signIn: credentials => () => dispatch(signIn(credentials)),
    signUp: credentials => () => dispatch(signUp(credentials))
  }
}

export default connect(
  mapDStatetoProps,
  mapDispatchtoProps
)(Landing)

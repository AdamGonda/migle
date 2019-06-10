import React from 'react'
import Style from 'styled-components'
import Background from './assets/confetti.png'
import Hero from './Hero'
import CTA from './CTA'
import Scroll from './Scroll'
import SignUpModule from './SignUpModule'
import LoginModule from './LoginModule'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/auth'

const Landing = ({ signIn }) => {
  const [showLoginPanel, setShowLoginPanel] = React.useState(false)
  const [showSignUpPanel, setShowSignUpPanel] = React.useState(false)
  const LOGIN = 'LOGIN'
  const SIGN_UP = 'SIGN_UP'
  const LANDING = 'LANDING'

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
        <LoginModule
          dispatchAction={signIn}
          backToLandigPage={switchViewTo(LANDING)}
        />
      ) : null}

      {showSignUpPanel && !showLoginPanel ? <SignUpModule /> : null}
    </Wrapper>
  )
}

const mapDStatetoProps = state => {
  return {}
}

const mapDispatchtoProps = dispatch => {
  return {
    signIn: credentials => () => dispatch(signIn(credentials))
  }
}

export default connect(
  mapDStatetoProps,
  mapDispatchtoProps
)(Landing)

const Wrapper = Style.section`
  height: 100%;    
  width: 100%;  
  display: grid;
  grid-template-rows: repead(10, 1fr);
  justify-content: center;

  background-color: #0094FF;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  justify-items: center;
`

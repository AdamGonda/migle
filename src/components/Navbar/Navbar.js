import React from 'react'
import { connect } from 'react-redux'
import { Wrapper } from './styles/Navbar'
import Left from './Left'
import PathNavigator from './PathNavigator'
import Right from './Right'
import { signOutAction } from '../../redux/actions/auth'

const Navbar = ({signOut}) => {
  return (
    <Wrapper>
      <Left />
      <PathNavigator />
      <Right signOut={signOut} />
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOutAction())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navbar)

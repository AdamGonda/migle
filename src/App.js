import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home page/Home'
import Sprint from './components/Sprint page/Sprint'
import Landing from './components/Landing Page/Landing'
import PersonalProject from './components/Project page/PersonalProject';
import TeamProject from './components/Project page/TeamProject';

const App = ({ isLoggedIn, firebaseAuthIsLoaded }) => {
  return (
    <Router>
      {!firebaseAuthIsLoaded ? null : isLoggedIn ? (
        <>
          <Navbar />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/personal-project/:id'} component={PersonalProject} />
            <Route exact path={'/team-project/:id'} component={TeamProject} />
            <Route
              exact
              path={'/personal-project/sprint/:id'}
              component={Sprint}
            />
            <Route
              exact
              path={'/team-project/sprint/:id'}
              component={Sprint}
            />
          </Switch>
        </>
      ) : (
        <Landing />
      )}
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    firebaseAuthIsLoaded: state.fireBase.auth.isLoaded,
    isLoggedIn: state.fireBase.auth.uid
  }
}

export default connect(
  mapStateToProps,
  null
)(App)

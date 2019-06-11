import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home page/Home'
import Project from './components/Project page/Project'
import FeatureSet from './components/Feature set page/FeatureSet'
import Sprint from './components/Sprint page/Sprint'
import Landing from './components/Landing Page/Landing'

const App = ({ isLoggedIn, firebaseAuthIsLoaded }) => {
  return (
    <Router>
      {!firebaseAuthIsLoaded ? null : isLoggedIn ? (
        <>
          <Navbar />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/project/:id'} component={Project} />
            <Route
              exact
              path={'/project/sprint/:id'}
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

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home page/Home'
import Project from './components/Project page/Project'
import FeatureSet from './components/Feature set page/FeatureSet'
import Sprint from './components/Sprint page/Sprint'
import Landing from './components/Landing Page/Landing'

const App = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/project/:id'} component={Project} />
            <Route
              exact
              path={'/project/feature-set/:id'}
              component={FeatureSet}
            />
            <Route
              exact
              path={'/project/feature-set/sprint/:id'}
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
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App)

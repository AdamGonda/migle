import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Project from './components/Project/Project'
import FeatureSet from './components/Feature set/FeatureSet'
import Sprint from './components/Sprint/Sprint'

export default () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/project/:id'} component={Project} />
        <Route exact path={'/project/feature-set/:id'} component={FeatureSet} />
        <Route exact path={'/project/feature-set/sprint/:id'} component={Sprint} />
      </Switch>
    </Router>
  )
}

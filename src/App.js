import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import FeatureSet from './components/Feature set/FeatureSet';
import Sprint from './components/Sprint/Sprint';

export default () => {
  return (
    <Router>
      <Navbar />

      <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/project'} component={Project}/>
          <Route exact path={'/feature-set'} component={FeatureSet}/>
          <Route exact path={'/sprint'} component={Sprint}/>
          {/* <Route exact path={'/shelter/:id/index'} render={(props) => <ShelterIndex {...props} value="All Dogs"/>}/>
          <Route exact path={'/shelter/:id/add-dog'} component={AddDog}/>
          <Route exact path={'/dog/:id'} name='DogDetails' component={DogDetails}/> */}
      </Switch>
    </Router>
  );
}

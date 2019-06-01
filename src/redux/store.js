import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { locations } from './reducers/locations'
import { projects } from './reducers/projects'
import { featureSets } from './reducers/featureSets'
import { sprints } from './reducers/sprints'
import { stories } from './reducers/stories'


const rootReducer = combineReducers({ locations: locations, projects, featureSets, sprints, stories})

const featureMiddleware = []

const coreMiddleware = []

const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(rootReducer, enhancer)

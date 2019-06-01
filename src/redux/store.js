import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { locations } from './reducers/locations'
import { projects } from './reducers/projects'

const rootReducer = combineReducers({ locations: locations, projects })

const featureMiddleware = []

const coreMiddleware = []

// compose store enhancers
const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(rootReducer, enhancer)

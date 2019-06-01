import { createStore, combineReducers } from 'redux'
import {locations} from './reducers/locations'
import {projects} from './reducers/projects'


const rootReducer = combineReducers({locations: locations,projects});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

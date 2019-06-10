import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { locations } from './reducers/locations'
import { auth } from './reducers/auth'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reduxReactFirebase, getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'
import firebase from '../config/fbConfig'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  locations,
  auth,
  fireStore: firestoreReducer,
  fireBase: firebaseReducer
})

const enhancer = compose(
  applyMiddleware(
    thunk.withExtraArgument({
      getFirestore,
      getFirebase
    })
  ),
  reduxFirestore(firebase),
  reduxReactFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(rootReducer, enhancer)

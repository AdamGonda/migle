import { createStore } from 'redux'
import sampleData from '../sampleData'

const initialState = sampleData

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'clickOnNavLink':
      return {
        ...state,
        locations: [
          ...state.locations.filter((x, idx) => idx < action.payload.idx)
        ]
      }

    case 'goToProject' || 'goToFeatureSet' || 'goToSprint':
      return {
        ...state,
        locations: [...state.locations, action.payload]
      }

    default:
      return state
  }
}

export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

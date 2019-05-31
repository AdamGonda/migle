import { createStore } from 'redux'
import sampleData from '../sampleData'

const initialState = sampleData

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'navigate with bar':
      return {
        ...state,
        locations: [
          ...state.locations.filter((x, idx) => idx < action.payload.idx)
        ]
      }

    case 'navigate with link':
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

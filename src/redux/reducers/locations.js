import { NAVIGATE_TO, NAVBAR, LINK } from '../actions/locations'
import sampleData from '../../sampleData'

const initState = sampleData.locations

export const locations = (state = initState, action) => {
  console.log('Hello state', state)
  switch (true) {
    case action.type.includes(NAVIGATE_TO):
      if (action.type.includes(NAVBAR)) {
        return state.filter((x, idx) => {
          if (idx == 0) {
            return idx <= action.payload.idx
          } else {
            return idx < action.payload.idx
          }
        })
      } else if (action.type.includes(LINK)) {
        return [...state, action.payload]
      }
    default:
      return state
  }
}

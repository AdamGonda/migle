import { NAVIGATE, NAVBAR, LINK } from '../actions/navigation'
import sampleData from '../../sampleData'

const initState = sampleData.locations

export const navigation = (state = initState, action) => {
  console.log(action);
  switch (true) {
    case action.type.includes(NAVIGATE):
      if (action.type.includes(NAVBAR)) {
        return {
          ...state,
          locations: [
            ...state.locations.filter((x, idx) => idx < action.payload.idx)
          ]
        }
      } else if (action.type.includes(LINK)) {
        return {
            ...state,
            locations: [...state.locations, action.payload]
          }
      }

    default:
      return state
  }
}

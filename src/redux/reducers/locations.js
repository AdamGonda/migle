import { NAVIGATE_TO, NAVBAR, LINK } from '../actions/locations'

const initState = [{ id: 0, name: 'Home', type: '' }]

export const locations = (state = initState, action) => {
  switch (true) {
    case action.type.includes(NAVIGATE_TO):
      if (action.type.includes(NAVBAR)) {
        return state.filter((location, idx) => {
          if (idx === 0) {
            action.payload.history.push(calcPath(action))
            return idx <= action.payload.idx
          } else {
            action.payload.history.push(calcPath(action))
            return idx < action.payload.idx
          }
        })
      } else if (action.type.includes(LINK)) {
        return [...state, action.payload.to]
      }
      break
    default:
      return state
  }
}

const calcPath = action => {
  const location = action.payload.to

  if (location.type === '') {
    return '/'
  } else if (location.type === 'personal-project') {
    return `/${location.type}/${location.id}`
  } else if (location.type === 'team-project') {
    return `/${location.type}/${location.id}`
  } else if (location.type === 'sprint') {
    return `/project/${location.type}/${location.id}`
  }
}

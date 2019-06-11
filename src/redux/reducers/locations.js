import { NAVIGATE_TO, NAVBAR, LINK } from '../actions/locations'

const initState = [{ id: 0, name: 'Home', type: '' }]

export const locations = (state = initState, action) => {
  switch (true) {
    case action.type.includes(NAVIGATE_TO):
      if (action.type.includes(NAVBAR)) {
        return state.filter((location, idx) => {
          if (idx === 0) {
            changeLocationUsingReactRouterHistory(action, calcPath(action))
            return idx <= action.payload.idx
          } else {
            changeLocationUsingReactRouterHistory(action, calcPath(action))
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
  } else if (location.type === 'project') {
    return `/${location.type}/${location.id}`
  } else if (location.type === 'feature-set') {
    return `/project/${location.type}/${location.id}`
  } else if (location.type === 'sprint') {
    return `/project/feature-set/${location.type}/${location.id}`
  } else if (location.type === 'story') {
    return `/project/feature-set/sprint/${location.id}`
  }
}
const changeLocationUsingReactRouterHistory = (action, type) =>
  action.payload.history.push(type)

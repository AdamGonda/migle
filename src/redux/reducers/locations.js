import { NAVIGATE_TO, NAVBAR, LINK } from '../actions/locations'
import sampleData from '../../sampleData'

const initState = sampleData.locations

export const locations = (state = initState, action) => {
  switch (true) {
    case action.type.includes(NAVIGATE_TO):
      if (action.type.includes(NAVBAR)) {
        return state.filter((location, idx) => {
          if (idx == 0) {
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
    default:
      return state
  }
}

const calcPath = action => {
  const location = action.payload.to

  if (location.path == '/') {
    return '/'
  } else if (location.path === 'project') {
    return `/${location.path}/${location.id}`
  } else if (location.path === 'feature-set') {
    return `/project/${location.path}/${location.id}`
  } else if (location.path === 'sprint') {
    return `/project/feature-set/${location.path}/${location.id}`
  } else if (location.path === 'story') {
    return `/project/feature-set/sprint/${location.id}`
  }
}
const changeLocationUsingReactRouterHistory = (action, path) =>
  action.payload.history.push(path)

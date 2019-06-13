import { NAVIGATE_TO, NAVBAR, LINK } from '../actions/locations'

const initState = [{ id: 0, name: 'Home', type: '' }]

export const locations = (state = initState, action) => {
  switch (true) {
    case action.type.includes(NAVIGATE_TO):
      if (action.type.includes(NAVBAR)) {
        pushLocationToHistory(action)
        return state.filter((location, idx) => {
          if (idx === 0) {
            return idx <= action.payload.idx
          } else {
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

const pushLocationToHistory = action => {
  const location = action.payload.to
  let pathToPush = ''

  if (location.type === '') {
    pathToPush = '/'
  } else if (location.type === 'personal-project') {
    pathToPush = `/${location.type}/${location.id}`
  } else if (location.type === 'team-project') {
    pathToPush = `/${location.type}/${location.id}`
  }else if(location.type == 'sprint'){
    return
  }

  action.payload.history.push(pathToPush)
}

import { AUTH_SUCCESS, AUTH_ERROR } from '../actions/auth'

const initState = {
  authError: null
}

export const auth = (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { authError: null }

    case AUTH_ERROR:
      return { authError: action.payload }

    default:
      return state
  }
}

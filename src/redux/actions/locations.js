export const NAVIGATE_TO_LOCATION = 'NAVIGATE_TO_LOCATION'

export const NAVBAR = 'NAVBAR'
export const LINK = 'LINK'

export const navigate = (to, using) => ({
  type: `${NAVIGATE_TO_LOCATION} [${to.name.toUpperCase()}] VIA [${using}]`,
  payload: {
    id: to.id,
    name: to.name,
    path: to.path
  }
})



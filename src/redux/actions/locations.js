export const NAVIGATE_TO_LOCATION = 'NAVIGATE_TO_LOCATION'

export const NAVBAR = 'NAVBAR'
export const LINK = 'LINK'

export const navigateToLocation = (idx, to, using) => ({
  type: `${NAVIGATE_TO_LOCATION} [${to.name.toUpperCase()}] VIA [${using}]`,
  payload: {
    idx,
    name: to.name,
    path: to.path
  }
})



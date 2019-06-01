export const NAVIGATE_TO = 'NAVIGATE_TO'

export const NAVBAR = 'NAVBAR'
export const LINK = 'LINK'

export const navigateToLocation = (idx, to, using) => ({
  type: `${NAVIGATE_TO} [${to.name.toUpperCase()}] VIA [${using}]`,
  payload: {
    idx,
    name: to.name,
    path: to.path
  }
})



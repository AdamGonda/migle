export const NAVIGATE_TO = 'NAVIGATE_TO'

export const NAVBAR = 'NAVBAR'
export const LINK = 'LINK'

export const navigateTo = (to, using, options) => ({
  type: `${NAVIGATE_TO} [${to.name.toUpperCase()}] VIA [${using}]`,
  payload: {
    to,
    history: options.history,
    idx: options.idx,
    from: options.from
  }
})



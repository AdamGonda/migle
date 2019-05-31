export const NAVIGATE = 'NAVIGATE'

export const NAVBAR = 'NAVBAR'
export const LINK = 'LINK'

export const navigate = (to, using) => ({
  type: `${NAVIGATE} TO [${to.name.upperCase()}] USING [${using}]`,
  payload: {
    id: to.id,
    name: to.name,
    path: to.path
  }
})



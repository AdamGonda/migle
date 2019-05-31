export const getIdFromEndOfPath = ownProps => {
  let path = ownProps.location.pathname
  let idStartIdx = path.search('[0-9]')
  return path.slice(idStartIdx, path.length)
}

export const findProperty = (property, state, id) => state[property].find(x => x.id == id)

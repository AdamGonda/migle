export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'

export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const fireBase = getFirebase()
  fireBase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => dispatch({ type: AUTH_SUCCESS }))
    .catch(err => dispatch({ type: AUTH_ERROR, payload: err }))
}

export const signUp = newUser => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const fireBase = getFirebase()
  const fireSore = getFirestore()
  fireBase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(resp => {
      return fireSore
        .collection('users')
        .doc(resp.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName
        })
    })
    .then(() => dispatch({ type: AUTH_SUCCESS }))
    .catch(err => dispatch({ type: AUTH_ERROR, payload: err }))
}

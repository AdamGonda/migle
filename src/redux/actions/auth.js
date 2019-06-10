export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const fireBase = getFirebase()
  fireBase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => console.log('happy path :)', credentials))
    .catch(() => console.log('sad path :(', credentials))
}

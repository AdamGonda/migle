export const createProject = project => {
  return (dispatch, getState, { getFireBase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('projects')
      .add({
        description: 'Hello baba',
        name: 'nice',
        sprintIds: [4,5,6],
        type: 'project'
      })
      .then(() => console.log('project created'))
      .catch(() => console.log('error happend'))
  }
}

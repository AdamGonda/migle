export const createPersonalProject = project => {
  return (dispatch, getState, { getFireBase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('personalProjects')
      .add({
        name: project.name,
        type: 'personal-project',
        owner: project.owner
      })
      .then(() => console.log('project created'))
      .catch(() => console.log('error happend'))
  }
}

export const createTeamProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const firebase = getFirebase()

    firestore
      .collection('teamProjects')
      .add({
        name: project.name,
        type: 'team-project'
      })
      .then(resp => {
        firestore
          .collection('memberships')
          .doc(project.owner)
          .update({
            memberships: firebase.firestore.FieldValue.arrayUnion({
              name: project.name,
              id: resp.id,
              type: 'team-project'
            })
          })
      })
      .then(() => console.log('team project created and membership is created'))
      .catch(err => console.log(err))
  }
}

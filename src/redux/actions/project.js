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

    console.log(project)

    firestore
      .collection('teamProjects')
      .add({
        name: project.name,
        type: 'team-project',
        owner: project.owner
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

export const addToStarredProjects = (ogProjectId, name, owner, type) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const starredProjects = getState().fireStore.data.starredProjects

    let isAlreadyStarred = false
    if (starredProjects != null) {
      isAlreadyStarred = Object.keys(starredProjects)
        .map(x => starredProjects[x] && starredProjects[x].ogProjectId)
        .includes(ogProjectId)
    }

    if (!isAlreadyStarred) {
      firestore
        .collection('starredProjects')
        .add({
          ogProjectId,
          name,
          owner,
          type
        })
        .then(() => console.log('the project added to starred projects'))
        .catch(err => console.log(err))
    }
  }
}

export const removeFromStarredProjects = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()

    firestore
      .delete({ collection: 'starredProjects', doc: id })
      .then(() => console.log('project removed from starredProjects'))
      .catch(err => console.log(err))
  }
}

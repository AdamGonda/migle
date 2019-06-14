export const createSprint = sprint => {
  console.log(sprint);
  
  return (dispatch, getState, { getFireBase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('sprints')
      .add({
        name: sprint.name,
        owner: sprint.owner,
        tasksLeft: 0,
        totalNumberOfTasks: 0,
        type: 'sprint',
      })
      .then(() => console.log('sprint created'))
      .catch(() => console.log('error happend'))
  }
}
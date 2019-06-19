export const createSprint = sprint => {
  console.log(sprint)

  return (dispatch, getState, { getFireBase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('sprints')
      .add({
        name: sprint.name,
        owner: sprint.owner,
        tasksLeft: sprint.stories.length,
        totalNumberOfTasks: sprint.stories.length,
        type: 'sprint'
      })
      .then(resp => {
        console.log(resp)
        sprint.stories.map(story => {
          firestore.collection('stories').add({ 
            parent: resp.id,
            description: story.description,
            businessValue: story.businessValue,
            status: "New",
            type: 'story'
          })
        })
      })
      .catch(err => console.log(err))
  }
}

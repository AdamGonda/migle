import React from 'react'
import Header from '../NewSprintForm/Header'
import Body from './Body'

const NewSprintForm = ({
  createSprint,
  match,
  closeModal,
  showNewStoryForm
}) => {
  const [stories, setStories] = React.useState([{}])

  return (
    <>
      <Header
        action={() => console.log("create sprint")}
        closeModal={closeModal}
        showNewStoryForm={showNewStoryForm}
        storiesLength={stories.length}
      />
      <Body stories={stories} />
    </>
  )
}

export default NewSprintForm

import React from 'react'
import { createSprint } from '../../redux/actions/sprint'
import { connect } from 'react-redux'
import Header from './Header'
import Body from './Body'

const SprintForm = ({ match, createSprint, closeModal }) => {
  const [isStoriesForm, setIsStoriesForm] = React.useState(false)
  const [stories, storiesDispatch] = React.useReducer(storiesReducer, [])

  return (
    <>
      <Header
        title={isStoriesForm ? 'New story' : 'Create sprint'}
        createSprint={createSprint(stories, match.params.id)}
        closeModal={closeModal}
        storiesLength={stories.length}
        isStoriesForm={isStoriesForm}
        showStoryForm={value => setIsStoriesForm(value)}
        storiesDispatch={storiesDispatch}
      />
      <Body stories={stories} isStoriesForm={isStoriesForm} />
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createSprint: (stories, owner) => name => () =>
      dispatch(createSprint({ name, owner, stories }))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SprintForm)

// ACTIONS
export const ADD = 'ADD'
export const REMOVE = 'REMOVE'

const storiesReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { ...action.payload, idForUsers: state.length + 1 }]
    case REMOVE:
      return { count: state.count - 1 }
    default:
      throw new Error('[IVALID ACTION]')
  }
}

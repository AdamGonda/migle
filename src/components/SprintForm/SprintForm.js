import React from 'react'
import { createSprint } from '../../redux/actions/sprint'
import { connect } from 'react-redux'
import Forms from './Forms'
import Stories from './Stories'

const SprintForm = ({ match, createSprint, closeModal }) => {
  const [formState, formStateDispatch] = React.useReducer(
    storiesReducer,
    initialState
  )
  const formsParams = {
    formsTitle: formState.isStoriesForm ? 'Add story' : 'Create sprint',
    createSprint: createSprint(
      match.params.id,
      formState.sprintTitle,
      formState.stories
    ),
    closeModal,
    formState,
    formStateDispatch
  }

  return (
    <>
      <Forms {...formsParams} />
      <Stories
        stories={formState.stories}
        isStoriesForm={formState.isStoriesForm}
      />
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createSprint: (owner, name, stories) => () =>
      dispatch(createSprint({ owner, name, stories }))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SprintForm)

// ACTIONS
export const ADD_STORY = 'ADD_STORY'
export const REMOVE_STORY_BY_ID = 'REMOVE_STORY_BY_ID'
export const TOGGLE_STORIES_FORM = 'TOGGLE_STORIES_FORM'
export const SET_SPRINT_TITLE = 'SET_SPRINT_TITLE'
export const SET_STORY_DESCRIPTION = 'SET_STORY_DESCRIPTION'
export const SET_BUSINESS_VALUE = 'SET_BUSINESS_VALUE'

const initialState = {
  stories: [],
  isStoriesForm: false,
  sprintTitle: '',
  storyDescription: '',
  businessValue: 100
}

const storiesReducer = (state, action) => {
  switch (action.type) {
    case ADD_STORY:
      return {
        ...state,
        stories: [
          ...state.stories,
          {
            description: state.storyDescription,
            businessValue: state.businessValue,
            idForUsers: state.stories.length + 1
          }
        ]
      }
    case REMOVE_STORY_BY_ID:
      return {
        ...state,
        stories: [...state.stories].filter(
          story => story.idForUsers != action.payload.id
        )
      }
    case TOGGLE_STORIES_FORM:
      return {
        ...state,
        isStoriesForm: action.payload
      }
    case SET_STORY_DESCRIPTION:
      return {
        ...state,
        storyDescription: action.payload
      }
    case SET_BUSINESS_VALUE:
      return {
        ...state,
        businessValue: action.payload
      }
    case SET_SPRINT_TITLE:
      console.log(action.payload)
      return {
        ...state,
        sprintTitle: action.payload
      }
    default:
      throw new Error('[IVALID ACTION]')
  }
}

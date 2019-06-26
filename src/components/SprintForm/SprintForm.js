import React from 'react'
import { createSprint } from '../../redux/actions/sprint'
import { connect } from 'react-redux'
import Inputs from './Inputs'
import Stories from './Stories'

const SprintForm = ({ match, createSprint, closeModal }) => {
  const [formState, formStateDispatch] = React.useReducer(
    storiesReducer,
    initialState
  )
  const formsParams = {
    formsTitle: formState.isStoriesForm ? 'Add story' : 'Create sprint',
    createSprint: createSprint({
      owner: match.params.id,
      name: formState.sprintTitle,
      stories: formState.stories,
      sprintLength: formState.sprintLength
    }),
    closeModal,
    formState,
    formStateDispatch
  }

  return (
    <>
      <Inputs {...formsParams} />
      <Stories
        stories={formState.stories}
        isStoriesForm={formState.isStoriesForm}
      />
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createSprint: sprint => () =>
      dispatch(createSprint(sprint))
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
export const SET_SPRINT_LENGTH = 'SET_SPRINT_LENGTH'

const initialState = {
  stories: [],
  isStoriesForm: false,
  sprintTitle: '',
  storyDescription: '',
  businessValue: 100,
  sprintLength: 1
}

const storiesReducer = (state, action) => {
  switch (action.type) {
    case ADD_STORY:
      return {
        ...state,
        stories: [
          ...state.stories,
          {
            description: action.payload.description,
            businessValue: action.payload.businessValue,
            idForUsers: action.payload.idForUsers
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
      return {
        ...state,
        sprintTitle: action.payload
      }
    case SET_SPRINT_LENGTH:
      console.log(action.payload);
      
        return {
          ...state,
          sprintLength: action.payload
        }
    default:
      throw new Error('[IVALID ACTION]')
  }
}

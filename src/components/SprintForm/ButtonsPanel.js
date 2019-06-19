import React from 'react'
import {
  StoryBtns,
  AddStoryBtn,
  CancelStoyForm,
  SprintBtns,
  CreateSprintBtn,
  ToggleStoryForm
} from './styles/ButtonPanel'
import {
  ADD_STORY,
  TOGGLE_STORIES_FORM,
  SET_BUSINESS_VALUE,
  SET_STORY_DESCRIPTION
} from './SprintForm'

export default ({ createSprint, closeModal, formState, formStateDispatch }) => {
  return (
    <>
      {!formState.isStoriesForm ? (
        <SprintBtns>
          <ToggleStoryForm
            onClick={() =>
              formStateDispatch({
                type: TOGGLE_STORIES_FORM,
                payload: true
              })
            }
          >
            Add stories
          </ToggleStoryForm>
          {formState.stories.length > 0 && formState.sprintTitle.length > 5 ? (
            <CreateSprintBtn
              onClick={() => {
                closeModal()
                createSprint()
              }}
            >
              Create sprint
            </CreateSprintBtn>
          ) : null}
        </SprintBtns>
      ) : (
        <>
          <StoryBtns>
            <AddStoryBtn
              onClick={() => {
                if (formState.storyDescription.length > 15) {
                  formStateDispatch({
                    type: ADD_STORY,
                    payload: {
                      description: formState.storyDescription,
                      businessValue: formState.businessValue,
                      idForUsers: formState.stories.length + 1
                    }
                  })

                  formStateDispatch({
                    type: SET_STORY_DESCRIPTION,
                    payload: ''
                  })

                  formStateDispatch({
                    type: SET_BUSINESS_VALUE,
                    payload: 100
                  })
                }
              }}
            >
              Submit
            </AddStoryBtn>
            <CancelStoyForm
              onClick={() =>
                formStateDispatch({
                  type: TOGGLE_STORIES_FORM,
                  payload: false
                })
              }
            >
              >
            </CancelStoyForm>
          </StoryBtns>
        </>
      )}
    </>
  )
}

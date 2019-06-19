import React from 'react'
import ButtonsPanel from './ButtonsPanel'
import BusinessValueIcon from './assets/businessValue.svg'
import {
  Wrapper,
  Top,
  Bottom,
  StoryDescription,
  SprintTitleInput,
  BusinessValue
} from './styles/SprintForm'
import {
  SET_STORY_DESCRIPTION,
  SET_BUSINESS_VALUE,
  SET_SPRINT_TITLE
} from './SprintForm'

export default ({
  formsTitle,
  createSprint,
  closeModal,
  formState,
  formStateDispatch
}) => {
  const buttonPanelParams = {
    createSprint,
    closeModal,
    formState,
    formStateDispatch
  }

  return (
    <Wrapper>
      <Top>
        <h1>{formsTitle}</h1>
        {!formState.isStoriesForm ? (
          <button onClick={closeModal}>X</button>
        ) : null}
      </Top>

      <Bottom>
        {formState.isStoriesForm ? (
          <StoryDescription
            placeholder="Description..."
            value={formState.storyDescription}
            onChange={e =>
              formStateDispatch({
                type: SET_STORY_DESCRIPTION,
                payload: e.target.value
              })
            }
          />
        ) : (
          <SprintTitleInput
            placeholder="Title..."
            value={formState.sprintTitle}
            onChange={e =>
              formStateDispatch({
                type: SET_SPRINT_TITLE,
                payload: e.target.value
              })
            }
          />
        )}
        {formState.isStoriesForm ? (
          <BusinessValue>
            <img src={BusinessValueIcon} />
            <select
              onChange={e =>
                formStateDispatch({
                  type: SET_BUSINESS_VALUE,
                  payload: e.target.value
                })
              }
              value={formState.businessValue}
            >
              {[...Array(2100).keys()]
                .filter(x => x % 100 == 0 && x > 0)
                .map(x => (
                  <option>{x}</option>
                ))}
            </select>
          </BusinessValue>
        ) : null}
        <ButtonsPanel {...buttonPanelParams} />
      </Bottom>
    </Wrapper>
  )
}

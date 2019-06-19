import React from 'react'
import Style from 'styled-components'
import { ADD } from './SprintForm'
import Businessvalueicon from './assets/businessValue.svg'

const ButtonsPanel = ({
  sprintMode,
  createSprint,
  showStoryForm,
  storiesLength,
  storiesDispatch,
  description,
  sprintTitle,
  setDescription,
  closeModal
}) => {
  const [businessValue, setBusinessValue] = React.useState(100)

  const showCreateSprintBtn = () => {
    if (storiesLength > 0 && sprintTitle.length > 5) {
      return (
        <CreateSprintBtn
          onClick={() => {
            closeModal()
            createSprint()
          }}
        >
          Create sprint
        </CreateSprintBtn>
      )
    } else {
      return null
    }
  }

  return (
    <>
      {sprintMode ? (
        <SprintBtns>
          <ToggleStoryForm onClick={() => showStoryForm(true)}>
            Add stories
          </ToggleStoryForm>
          {showCreateSprintBtn()}
        </SprintBtns>
      ) : (
        <>
          <BusinessValue>
            <img src={Businessvalueicon} />
            <select
              onChange={e => setBusinessValue(e.target.value)}
              value={businessValue}
            >
              {[...Array(2100).keys()]
                .filter(x => x % 100 == 0 && x > 0)
                .map(x => (
                  <option>{x}</option>
                ))}
            </select>
          </BusinessValue>
          <StoryBtns>
            <AddStoryBtn
              onClick={() => {
                if (description.length > 15) {
                  storiesDispatch({
                    type: ADD,
                    payload: { businessValue, description }
                  })

                  setDescription('')
                  setBusinessValue(100)
                }
              }}
            >
              Submit
            </AddStoryBtn>
            <CancelStoyForm onClick={() => showStoryForm(false)}>
              >
            </CancelStoyForm>
          </StoryBtns>
        </>
      )}
    </>
  )
}

export default ButtonsPanel

const BusinessValue = Style.div`
  display: flex;
  align-items: center;
  align-self: start;
  grid-row: 2;
  grid-column: 2;
  justify-self: start;
  align-self: end;
  background: white;
  padding: 6.2px 10px;
  width: 70px;

  img {
    width: 15px;
    margin-right: 10px;
  }

  select {
    border: none;
    width: 75px;
    height: 25px;
  }
`

const StoryBtns = Style.div`
  display: flex;
  align-content: space-between;
  grid-row: 2;
  grid-column: 2;
  justify-self: end;
  margin-top: 15px;
`

const AddStoryBtn = Style.button`
  font-size: 18px;
  background: rgba(0,0,0,0);
  border: 1.5px solid white;
  color: white;
  padding: 7px 29px;
  margin: 0px 15px;

  :hover {
    cursor: pointer;
  }
`

const CancelStoyForm = Style.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  background: rgba(0,0,0,0);
  border: 1.5px solid white;
  color: white;
  padding: 0 15px;

  :hover {
    cursor: pointer;
  }
`

const SprintBtns = Style.div`
  display: flex;
  align-content: space-between;
  grid-row: 2;
  grid-column: 2;
  align-self: center;
  justify-self: center;
  margin-top: 25px;
`

const CreateSprintBtn = Style.button`
  font-size: 18px;
  font-weight: 500;
  background: white;
  border-radius: 5px;
  border: none;
  color: var(--dark-text-color);
  padding: 7px 29px;
  margin: 0px 15px;

  :hover {
    cursor: pointer;
  }
`

const ToggleStoryForm = Style.button`
  font-size: 18px;
  background: rgba(0,0,0,0);
  border: 1.5px solid white;
  color: white;
  padding: 7px 29px;
  margin: 0px 15px;

  :hover {
    cursor: pointer;
  }
`

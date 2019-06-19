import Style from 'styled-components'

export const StoryBtns = Style.div`
  display: flex;
  align-content: space-between;
  grid-row: 2;
  grid-column: 2;
  justify-self: end;
  margin-top: 15px;
`

export const AddStoryBtn = Style.button`
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

export const CancelStoyForm = Style.button`
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

export const SprintBtns = Style.div`
  display: flex;
  align-content: space-between;
  grid-row: 2;
  grid-column: 2;
  align-self: center;
  justify-self: center;
  margin-top: 25px;
`

export const CreateSprintBtn = Style.button`
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

export const ToggleStoryForm = Style.button`
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

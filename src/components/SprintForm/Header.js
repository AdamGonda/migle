import React from 'react'
import Style from 'styled-components'
import ButtonsPanel from './ButtonsPanel'

const Header = ({
  title,
  createSprint,
  closeModal,
  showStoryForm,
  storiesLength,
  isStoriesForm,
  storiesDispatch
}) => {
  const [sprintTitle, setSprintTitle] = React.useState('')
  const [storyDescription, setDescription] = React.useState('')

  return (
    <Wrapper>
      <Top>
        <h1>{title}</h1>
        {!isStoriesForm ? <button onClick={closeModal}>X</button> : null}
      </Top>

      <Bottom>
        {isStoriesForm ? (
          <StoryDescription
            placeholder="Description..."
            value={storyDescription}
            onChange={e => setDescription(e.target.value)}
          />
        ) : (
          <SprintTitleInput
            placeholder="Title..."
            value={sprintTitle}
            onChange={e => setSprintTitle(e.target.value)}
          />
        )}
        <ButtonsPanel
          sprintMode={!isStoriesForm}
          createSprint={createSprint(sprintTitle)}
          showStoryForm={showStoryForm}
          storiesLength={storiesLength}
          isStoriesForm={isStoriesForm}
          closeModal={closeModal}
          storiesDispatch={storiesDispatch}
          description={storyDescription}
          sprintTitle={sprintTitle}
          setDescription={value => setDescription(value)}
        />
      </Bottom>
    </Wrapper>
  )
}

export default Header

const Bottom = Style.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 0.3fr 0.3fr;
`

const SprintTitleInput = Style.input`
  grid-column: 2;
  height: 37px;
  width: 497px;
  align-self: start;
  font-size: 15px;
  padding: 0px 15px;
  border: none;
`

const StoryDescription = Style.textarea`
  width: 497px;
  grid-column: 2;
  height: 55px;
  align-self: start;
  resize: none;
  border: none;
  padding: 10px 15px;
  font-size: 15px;
`

const Wrapper = Style.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  width: 100%;
  height: 100%;
`

const Top = Style.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  height: 100%;
  
  h1 {
    grid-column: 2;
    place-self: center;
    font-weight: 500;
    font-size: 40px;
    margin: 0px;
  }

  button {
    align-self: center;
    justify-self: end;
    margin-right: 50px;

    font-weight: 600;
    font-size: 18px;
    width: 34px;
    height: 34px;
    border: 2px solid white;
    color: white;
    background: rgba(0,0,0,0);
    text-align: center;
    grid-column: 3;
  
    :hover {
      cursor: pointer;
    }
  }
`

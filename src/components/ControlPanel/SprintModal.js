import React from 'react'
import Style from 'styled-components'
import NewSprintForm from './NewSprintForm'
import { createSprint } from '../../redux/actions/sprint'
import { connect } from 'react-redux'
import StoryPreview from './StoryPreview'

const SprintModal = ({ createSprint, match }) => {
  const [showForm, setShowForm] = React.useState(false)
  const [sprintTitle, setSprintTitle] = React.useState('')
  const [stories, setStories] = React.useState([])

  return (
    <Wrapper>
      <Header>
        <SprintTitle
          name="name"
          placeholder="Sprint name"
          onChange={e => setSprintTitle(e.target.value)}
        />
        <CreateStoryBtn onClick={() => setShowForm(true)}>
          Add new user story
        </CreateStoryBtn>
        {stories.length > 0 && sprintTitle != '' ? (
          <CreateSprintBtn onClick={() => createSprint(sprintTitle, match.params.id, stories)}>Create sprint</CreateSprintBtn>
        ) : null}
      </Header>
      <Body>
        {!showForm ? null : (
          <NewSprintForm
            submit={(description, estimation, businessValue) => {
              setStories([
                ...stories,
                { description, estimation, businessValue }
              ])
              setShowForm(false)
            }}
            cancel={() => setShowForm(false)}
          />
        )}
        <StoriesArea>
          {stories &&
            stories
              .slice(0)
              .reverse()
              .map(story => (
                <StoryPreview
                  description={story.description}
                  estimation={story.estimation}
                  businessValue={story.businessValue}
                />
              ))}
        </StoriesArea>
      </Body>
    </Wrapper>
  )
}

const mapStateToPops = state => {
  return {}
}

const mapDispatchToPorps = dispatch => {
  return {
    createSprint: (name, owner, stories) =>
      dispatch(createSprint({ name, owner, stories }))
  }
}

export default connect(
  mapStateToPops,
  mapDispatchToPorps
)(SprintModal)

const CreateSprintBtn = Style.button`
  font-size: 20px;
`

const StoriesArea = Style.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  width: 80vw;
`

const Body = Style.div`
  margin: 20px 50px;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CreateStoryBtn = Style.button`
  display: block;
  margin-left: 10px;
  font-weight: 400;
  font-size: 20px;
  padding: 11px;
  height: 100%;
  border-radius: 3px;
  color: var(--dark-text-color);
  background: var(--box-color);


  :hover {
    background: white;
  }
`

const SprintTitle = Style.input`
  background: rgba(0,0,0,0);
  color: white;
  font-size: 20px;
  padding: 10px;
  border: 1px solid white;
  height: 100%;
  border-radius: 3px;
  text-align: center;

  ::placeholder {
    color: white;
    opacity: 0.7;
  }
`

const Header = Style.div`
  display: flex;
  justify-items: center;
`

const Wrapper = Style.div`
  padding-top: 50px;
  display: grid;
  place-items: center center;
  overflow: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 104, 178, 0.7);
  z-index: 1;
  color: white;
  animation: showUp 0.2s ease-in;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

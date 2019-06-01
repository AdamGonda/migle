import React from 'react'
import { connect } from 'react-redux'
import Style from 'styled-components'
import Task from './Story/Story'
import SprintDetails from './SprintDetails/SprintDetails'
import { getIdFromEndOfPath, findProperty } from '../../util'

const Sprint = ({ stories }) => {
  return (
    <Wrapper>
      <Left>
        {/* {stories.map(story => {
          return (
            <Task
              id={story.id}
              dependencies={story.dependencies}
              story={story.story}
              estimation={story.estimation}
              responsible={story.responsible}
              status={story.status}
            />
          )
        })} */}
        Sprint
      </Left>
      {/* <Right>
        <SprintDetails />
      </Right> */}
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stories: findProperty(
      'sprints',
      state,
      getIdFromEndOfPath(ownProps)
    ).storyIds.map(storyId => state.stories.find(story => storyId == story.id))
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}
export default Sprint
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Sprint)

const Wrapper = Style.div`
  display: flex;
  padding: 15px 10px;
  color: #2D4D60;
`

const Left = Style.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0px 15px;
`

const Right = Style.div`
  width: 40%;
  padding: 10px 15px;
`

import React from 'react'
import { connect } from 'react-redux'
import Style from 'styled-components'
import Task from './Story/Story'
import SprintDetails from './SprintDetails/SprintDetails'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Sprint = ({ stories }) => {
  return (
    <Wrapper>
      <Left>
        {stories && stories.map(story => {
          return (
            <Task
              key={story.id}
              //id={story.id}
              //dependencies={story.dependencies}
              description={story.description}
              estimation={story.estimation}
              responsible={story.responsible}
              status={story.status}
            />
          )
        })}
      </Left>
      <Right>
        <SprintDetails />
      </Right>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {stories: state.fireStore.ordered.stories}
}

export default compose(
  connect(
    mapStateToProps,
    {}
  ),
  firestoreConnect(props => [
    {
      collection: 'stories',
      where: ['parent', '==', props.match.params.id]
    }
  ])
)(Sprint)

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

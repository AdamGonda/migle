import React from 'react'
import { connect } from 'react-redux'
import { Wrapper, Stories } from './styles/Sprint'
import Story from './Story/Story'
import SprintDetails from './SprintDetails/SprintDetails'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Sprint = ({ stories, sprint }) => {
  return (
    <Wrapper>
      <Stories>
        {stories &&
          stories.map(story => {
            return (
              <Story
                key={story.id}
                description={story.description}
                estimation={story.estimation}
                responsible={story.responsible}
                status={story.status}
                businessValue={story.businessValue}
              />
            )
          })}
      </Stories>
      <SprintDetails sprint={sprint} />
    </Wrapper>
  )
}

const mapStateToProps = (state, ownState) => {
  return {
    sprint:
      state.fireStore.ordered.sprints &&
      state.fireStore.ordered.sprints.find(
        x => x.id == ownState.match.params.id
      ),
    stories: state.fireStore.ordered.stories
  }
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

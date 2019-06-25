import React from 'react'
import { connect } from 'react-redux'
import { Wrapper, Left, Right } from './styles/Sprint'
import Story from './Story/Story'
import SprintDetails from './SprintDetails/SprintDetails'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Sprint = ({ stories }) => {
  return (
    <Wrapper>
      <Left>
        {stories && stories.map(story => {  
          return (
            <Story
              key={story.id}
              //id={story.id}
              //dependencies={story.dependencies}
              description={story.description}
              estimation={story.estimation}
              responsible={story.responsible}
              status={story.status}
              businessValue={story.businessValue}
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



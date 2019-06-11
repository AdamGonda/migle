import React from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Module from '../Module/Module'
import OutliedStarIcon from './assets/outlined star icon.svg'
import OngoingIcon from './assets/ongoing icon.svg'
import DoneIcon from './assets/done icon.svg'

const Project = ({ sprints }) => {
  return (
    <Wrapper>
      <Module
        icon={<img alt="star" src={OutliedStarIcon} />}
        name={'Starred sprints'}
        items={sprints}
      />

      <Module
        icon={<img alt="star" src={OngoingIcon} />}
        name={'Ongoing sprints'}
        items={sprints}
      />

      <Module
        icon={<img alt="star" src={DoneIcon} />}
        name={'Done sprints'}
        items={sprints}
      />
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    sprints: state.fireStore.ordered.sprints
  }
}

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect(props => [
    {
      collection: 'sprints',
      where: ['parent', '==', props.match.params.id]
    }
  ])
)(Project)

const Wrapper = Style.div`
  padding: 15px 60px;
`

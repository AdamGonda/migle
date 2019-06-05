import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigateTo, LINK } from '../../redux/actions/locations'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const FeatureSet = ({ sprints, navigateTo }) => {
  return (
    <>
    <h1 style={{color:'white'}}>Feature set</h1>
      {sprints && sprints.map(sprint => {
        return (
          <p key={sprint.id}>
            <NavLink
              to={`${sprint.type}/${sprint.id}`}
              onClick={() => navigateTo(sprint, LINK, {})}
            >
              {sprint.name}
            </NavLink>
          </p>
        )
      })}
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    sprints: state.fireStore.ordered.sprints
  }
}

export default compose(
  connect(
    mapStateToProps,
    { navigateTo }
  ),
  firestoreConnect(props => [
    {
      collection: 'sprints',
      where: ['parent', '==', props.match.params.id]
    }
  ])
)(FeatureSet)
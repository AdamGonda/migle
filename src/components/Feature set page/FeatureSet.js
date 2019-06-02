import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIdFromEndOfPath, findProperty } from '../../util'
import { navigateTo, LINK } from '../../redux/actions/locations'

const FeatureSet = ({ sprints, navigateTo }) => {
  return (
    <>
    <h1 style={{color:'white'}}>Feature set</h1>
      {sprints.map(sprint => {
        return (
          <p key={sprint.id}>
            <NavLink
              
              to={`${sprint.path}/${sprint.id}`}
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
    sprints: findProperty(
      'featureSets',
      state,
      getIdFromEndOfPath(ownProps)
    ).sprintIds.map(sprintId =>
      state.sprints.find(sprint => sprintId === sprint.id)
    )
  }
}

export default connect(
  mapStateToProps,
  { navigateTo }
)(FeatureSet)
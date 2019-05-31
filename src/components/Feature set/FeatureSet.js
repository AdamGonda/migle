import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIdFromEndOfPath, findProperty } from '../../util'

const FeatureSet = ({ sprints, goToSprint }) => {
  return (
    <ul>
      {sprints.map(sprint => {
        return (
          <p>
            <NavLink
              to={`${sprint.path}/${sprint.id}`}
              onClick={() => goToSprint(sprint.id, sprint.name, sprint.path)}
            >
              {sprint.name}
            </NavLink>
          </p>
        )
      })}
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    sprints: findProperty(
      'featureSets',
      state,
      getIdFromEndOfPath(ownProps)
    ).sprintIds.map(sprintId =>
      state.sprints.find(sprint => sprintId == sprint.id)
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToSprint: (id, name, path) =>
      dispatch({
        type: 'goToSprint',
        payload: {
          id,
          name,
          path
        }
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureSet)

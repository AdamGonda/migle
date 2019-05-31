import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIdFromEndOfPath, findProperty } from '../../util'

const Project = ({ featureSets, goToFeatureSet }) => {
  return (
    <ul>
      {featureSets.map(set => {
        return (
          <p>
            <NavLink
              to={`${set.path}/${set.id}`}
              onClick={() => goToFeatureSet(set.id, set.name, set.path)}
            >
              {set.name}
            </NavLink>
          </p>
        )
      })}
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    featureSets: findProperty(
      'projects',
      state,
      getIdFromEndOfPath(ownProps)
    ).featureSetIds.map(setId => state.featureSets.find(set => setId == set.id))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToFeatureSet: (id, name, path) =>
      dispatch({
        type: 'goToFeatureSet',
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
)(Project)

import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIdFromEndOfPath, findProperty } from '../../util'
import { navigateTo, LINK } from '../../redux/actions/locations'

const Project = ({ featureSets, navigateTo }) => {
  return (
    <>
      <h1 style={{ color: 'white' }}>Project</h1>
      {featureSets.map(set => {
        return (
          <p>
            <NavLink
              to={`${set.path}/${set.id}`}
              onClick={() => navigateTo(set, LINK, {})}
            >
              {set.name}
            </NavLink>
          </p>
        )
      })}
    </>
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

export default connect(
  mapStateToProps,
  { navigateTo }
)(Project)

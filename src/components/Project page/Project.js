import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigateTo, LINK } from '../../redux/actions/locations'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Project = ({ featureSets, navigateTo }) => {
  return (
    <>
      <h1 style={{ color: 'white' }}>Project</h1>
      {featureSets &&
        featureSets.map(set => {
          return (
            <p key={set.id}>
              <NavLink
                to={`${set.type}/${set.id}`}
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

const mapStateToProps = state => {
  return {
    featureSets: state.fireStore.ordered.featureSets
  }
}

export default compose(
  connect(
    mapStateToProps,
    { navigateTo }
  ),
  firestoreConnect(props => [
    {
      collection: 'featureSets',
      where: ['parent', '==', props.match.params.id]
    }
  ])
)(Project)

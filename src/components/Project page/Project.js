import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigateTo, LINK } from '../../redux/actions/locations'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Project = ({ sprints, navigateTo }) => {
  return (
    <>
      <h1 style={{ color: 'white' }}>Project</h1>
      {sprints &&
        sprints.map(item => {
          return (
            <p key={item.id}>
              <NavLink
                to={`${item.type}/${item.id}`}
                onClick={() => navigateTo(item, LINK, {})}
              >
                {item.name}
              </NavLink>
            </p>
          )
        })}
    </>
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
    { navigateTo }
  ),
  firestoreConnect(props => [
    {
      collection: 'sprints',
      where: ['parent', '==', props.match.params.id]
    }
  ])
)(Project)

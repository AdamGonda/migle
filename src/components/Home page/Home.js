import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigateTo, LINK } from '../../redux/actions/locations'
import { createProject } from '../../redux/actions/project'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Landing from '../Landing Page/Landing'

const Home = ({ projects, isLoggedIn, navigateTo, createProject }) => {
  return (
    <>
    <h1 style={{color:'white'}}>Home set</h1>
      {projects && projects.map(project => {
        return (
          <p key={project.id}>
            <NavLink
              to={`${project.type}/${project.id}`}
              onClick={() => navigateTo(project, LINK, {})}
            >
              {project.name}
            </NavLink>
          </p>
        )
      })}
    </>
  )
}

const mapStateToProps = state => {
  console.log(state)

  return {
    projects: state.fireStore.ordered.projects,
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default compose(
  connect(
    mapStateToProps,
    { navigateTo, createProject }
  ),
  firestoreConnect([{ collection: 'projects' }])
)(Home)

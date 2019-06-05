import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigateTo, LINK } from '../../redux/actions/locations'
import { createProject } from '../../redux/actions/project'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Home = ({ projects, navigateTo, createProject }) => {
  return (
    <>
      <h1 style={{ color: 'white' }}>Home</h1>
      {projects &&
        projects.map((project, idx) => {
          return (
            <p key={idx}>
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

const mapStateToProps = (state) => {
  return {
    projects: state.fireStore.ordered.projects
  }
}

export default compose(
  connect(
    mapStateToProps,
    { navigateTo, createProject }
  ),
  firestoreConnect([{ collection: 'projects'}])
)(Home)

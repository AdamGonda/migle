import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigateTo, LINK } from '../../redux/actions/locations'

const Home = ({ projects, navigateTo }) => {
  return (
    <>
      <h1 style={{ color: 'white' }}>Home</h1>
      {projects.map((project, idx) => {
        return (
          <p key={idx}>
            <NavLink
              to={`${project.path}/${project.id}`}
              onClick={() =>
                navigateTo(
                  project,
                  LINK,
                  {}
                )
              }
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
  return {
    projects: state.projects
  }
}

export default connect(
  mapStateToProps,
  { navigateTo }
)(Home)

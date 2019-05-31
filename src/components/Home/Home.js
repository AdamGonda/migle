import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = ({ projects, goToProject }) => {
  return (
    <>
      {projects.map((project, idx) => {
        return (
          <p key={idx}>
            <NavLink
              to={`${project.path}/${project.id}`}
              onClick={() =>
                goToProject(project.id, project.name, project.path)
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

const mapDispatchToProps = dispatch => {
  return {
    goToProject: (id, name, path) =>
      dispatch({
        type: 'goToProject',
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
)(Home)

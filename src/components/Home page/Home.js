import React from 'react'
import { connect } from 'react-redux'
import {
  createPersonalProject,
  createTeamProject
} from '../../redux/actions/project'
import { Wrapper } from './styles/Home'
import Module from '../Module/Module'
import OutliedStarIcon from './assets/outlined star icon.svg'
import Item from '../Module/Item'
import PersonIcon from './assets/person icon.svg'
import TeamIcon from './assets/team icon.svg'
import {
  addToStarredProjects,
  removeFromStarredProjects
} from '../../redux/actions/project'

const Home = ({
  createPersonalProject,
  createTeamProject,
  addToStarredProjectsAction,
  removeFromStarredProjectsAction,
  uid
}) => {
  return (
    <Wrapper>
      <Module
        icon={<img alt="star" src={OutliedStarIcon} style={{ width: 23 }} />}
        name={'Starred projects'}
        fetchFrom={'starredProjects'}
        ownerIdForFetch={uid}
        showItem={(item, idx) => {
          return (
            <Item
              key={item.id + idx}
              id={item.id}
              type={item.type}
              name={item.name}
              navigateTo={item.type} // TODO remove this
              animationDelay={idx}
              showStar={true}
              starAction={() => {
                removeFromStarredProjectsAction(item.id)
              }}
            />
          )
        }}
      />
      <Module
        icon={
          <img
            alt="star"
            src={PersonIcon}
            style={{ width: 18, marginBottom: -2 }}
          />
        }
        name={'Personal projects'}
        fetchFrom={'personalProjects'}
        ownerIdForFetch={uid}
        moduleAction={(fireStoreFireBase, name) => {
          const { fireBase } = fireStoreFireBase
          createPersonalProject({ name, owner: fireBase.auth.uid })
        }}
        showItem={(item, idx) => {
          return (
            <Item
              key={item.id + idx}
              id={item.id}
              type={item.type}
              name={item.name}
              navigateTo={item.type}
              animationDelay={idx}
              showStar={false}
              starAction={() => {
                addToStarredProjectsAction(
                  item.id,
                  item.name,
                  item.owner,
                  item.type
                )
              }}
            />
          )
        }}
      />
      <Module
        icon={
          <img
            alt="star"
            src={TeamIcon}
            style={{ width: 30, marginBottom: -1 }}
          />
        }
        name={'Team projects'}
        fetchFrom={'memberships'}
        ownerIdForFetch={uid}
        moduleAction={(fireStoreFireBase, name) => {
          const { fireStore } = fireStoreFireBase
          const userMembershipId = fireStore.ordered.memberships[0].id
          createTeamProject({ name, owner: userMembershipId })
        }}
        showItem={(item, idx) =>
          item.memberships.map((item, idx) => (
            <Item
              key={item.id + idx}
              id={item.id}
              type={item.type}
              name={item.name}
              navigateTo={item.type}
              animationDelay={idx}
              showStar={false}
              starAction={() => {
                addToStarredProjectsAction(item.id, item.name, uid, item.type)
              }}
            />
          ))
        }
      />
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    uid: state.fireBase.auth.uid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPersonalProject: project => dispatch(createPersonalProject(project)),
    createTeamProject: project => dispatch(createTeamProject(project)),
    addToStarredProjectsAction: (id, name, owner, type) =>
      dispatch(addToStarredProjects(id, name, owner, type)),
    removeFromStarredProjectsAction: (id, name, owner, type) =>
      dispatch(removeFromStarredProjects(id, name, owner, type))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

import React from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../redux/actions/project'
import Style from 'styled-components'
import Module from '../Module/Module'
import OutliedStarIcon from './assets/outlined star icon.svg'
import Item from '../Module/Item'
import PersonIcon from './assets/person icon.svg'
import TeamIcon from './assets/team icon.svg'

const Home = ({ createProject, uid }) => {
  return (
    <Wrapper>
      <Module
        icon={<img alt="star" src={OutliedStarIcon} />}
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
              navigateTo={item.type}
              animationDelay={idx}
              showStar={true}
            />
          )
        }}
      />
      <Module
        icon={<img alt="star" src={PersonIcon} />}
        name={'Personal projects'}
        fetchFrom={'personalProjects'}
        ownerIdForFetch={uid}
        moduleAction={createProject}
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
            />
          )
        }}
      />
      <Module
        icon={<img alt="star" src={TeamIcon} />}
        name={'Team projects'}
        fetchFrom={'memberships'}
        ownerIdForFetch={uid}
        moduleAction={createProject}
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

export default connect(
  mapStateToProps,
  { createProject }
)(Home)

const Wrapper = Style.div`
  padding: 15px 60px;
`

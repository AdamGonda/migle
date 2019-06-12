import React from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../redux/actions/project'
import Style from 'styled-components'
import Module from '../Module/Module'
import OutliedStarIcon from './assets/outlined star icon.svg'
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
      />
      <Module
        icon={<img alt="person" src={PersonIcon} />}
        name={'Personal projects'}
        fetchFrom={'projects'}
        ownerIdForFetch={uid}
      />
      <Module
        icon={<img alt="team" src={TeamIcon} style={{ width: '25px' }} />}
        name={'Team projects'}
        fetchFrom={'memberships'}
        ownerIdForFetch={uid}
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

import React from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'
import Module from '../Module/Module'
import OutliedStarIcon from './assets/outlined star icon.svg'
import OngoingIcon from './assets/ongoing icon.svg'
import DoneIcon from './assets/done icon.svg'

const Project = ({ sprints, uid }) => {  
  return (
    <Wrapper>
      <Module
        icon={<img alt="star" src={OutliedStarIcon} />}
        name={'Starred sprints'}
        fetchFrom={'teamStarredProjects'}
        ownerIdForFetch={uid}
      />

      {/* <Module
        icon={<img alt="ongoing" src={OngoingIcon} />}
        name={'Ongoing sprints'}
        fetchFrom={'sprints'}
        ownerIdForFetch={match.params.id}
      />

      <Module
        icon={<img alt="done" src={DoneIcon} />}
        name={'Done sprints'}
        fetchFrom={'sprints'}
        ownerIdForFetch={match.params.id}
      /> */}
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
  null
)(Project)

const Wrapper = Style.div`
  padding: 15px 60px;
`

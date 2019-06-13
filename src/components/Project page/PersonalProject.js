import React from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'
import Module from '../Module/Module'
import OutliedStarIcon from './assets/outlined star icon.svg'
import OngoingIcon from './assets/ongoing icon.svg'
import DoneIcon from './assets/done icon.svg'
import Item from '../Module/Item'

const PersonalProject = ({ uid, match }) => {
  return (
    <Wrapper>
      <Module
        icon={<img alt="star" src={OutliedStarIcon} />}
        name={'Starred sprints'}
        fetchFrom={'starredSprints'}
        ownerIdForFetch={uid}
        showItem={(item, idx) => {
          return item.sprints
            .filter(item => item.parentProjectId == match.params.id)
            .map(item => {
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
            })
        }}
      />

      <Module
        icon={<img alt="star" src={OngoingIcon} />}
        name={'Ongoin sprints'}
        fetchFrom={'sprints'}
        filterFn={(item) => item.tasksLeft > 0}
        ownerIdForFetch={match.params.id}
        showItem={(item, idx) => (
          <Item
            key={item.id + idx}
            id={item.id}
            type={item.type}
            name={item.name}
            navigateTo={item.type}
            animationDelay={idx}
            showStar={false}
          />
        )}
      />

      <Module
        icon={<img alt="star" src={DoneIcon} />}
        name={'Done sprints'}
        fetchFrom={'sprints'}
        filterFn={(item) => item.tasksLeft == 0}
        ownerIdForFetch={match.params.id}
        showItem={(item, idx) => (
          <Item
            key={item.id + idx}
            id={item.id}
            type={item.type}
            name={item.name}
            navigateTo={item.type}
            animationDelay={idx}
            showStar={false}
          />
        )}
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
  null
)(PersonalProject)

const Wrapper = Style.div`
  padding: 15px 60px;
`

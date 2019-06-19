import React from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'
import Module from '../Module/Module'
import OutliedStarIcon from './assets/outlined star icon.svg'
import OngoingIcon from './assets/ongoing icon.svg'
import DoneIcon from './assets/done icon.svg'
import Item from '../Module/Item'
import ControlPanel from '../ControlPanel/ControlPanel';

const PersonalProject = ({ uid, match }) => {
  return (
    <Wrapper>
      <Sprints>
        <Module
          icon={<img alt="star" src={OutliedStarIcon} style={{width: 23}}/>}
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
          icon={<img alt="star" src={OngoingIcon} style={{width: 25, marginBottom: -2}}/>}
          name={'Ongoin sprints'}
          fetchFrom={'sprints'}
          filterFn={item => item.tasksLeft > 0}
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
          icon={<img alt="star" src={DoneIcon} style={{width: 25, marginBottom: -2}}/>}
          name={'Done sprints'}
          fetchFrom={'sprints'}
          filterFn={item => item.tasksLeft == 0}
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
      </Sprints >
      <ControlPanel  match={match}/>
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
  display: grid;
  grid-template: "sprints sprints sprints controll controll"
`

const Sprints = Style.div`
  grid-column: sprints;
`

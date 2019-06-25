import React from 'react'
import { Wrapper, Title, Body } from './styles/Module'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import ActionBtn from './ActionBtn'

const Module = ({
  name,
  icon,
  items,
  moduleAction,
  showItem,
  filterFn,
  fireStoreFireBase
}) => {
  return (
    <Wrapper>
      <Title>
        {icon}
        <p>{name}</p>
      </Title>
      <Body>
        {items &&
          items
            .filter(item => (filterFn ? filterFn(item) : true))
            .map((item, idx) => showItem(item, idx))}
        {moduleAction && (
          <ActionBtn action={name => moduleAction(fireStoreFireBase, name)} />
        )}
      </Body>
    </Wrapper>
  )
}

const mapStateToProps = (state, ownState) => {
  return {
    items: state.fireStore.ordered[ownState.fetchFrom],
    fireStoreFireBase: { fireBase: state.fireBase, fireStore: state.fireStore }
  }
}

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect(props => {
    return [
      {
        collection: props.fetchFrom,
        where: ['owner', '==', props.ownerIdForFetch]
      }
    ]
  })
)(Module)

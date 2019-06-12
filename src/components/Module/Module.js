import React from 'react'
import Style from 'styled-components'
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
        {moduleAction && <ActionBtn action={name => moduleAction(fireStoreFireBase, name)}/>}
      </Body>
    </Wrapper>
  )
}

const mapStateToProps = (state, ownState) => {
  return {
    items: state.fireStore.ordered[ownState.fetchFrom],
    fireStoreFireBase: {fireBase: state.fireBase, fireStore: state.fireStore}
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

const Wrapper = Style.div`
  margin-bottom: 52px;
`

const Title = Style.div`
  margin: 20px 0px 20px 0px;

  img {
    width: 17px;
    margin-right: 15px;
  }

  p {
    font-size: 24px;
    color: white;
    display: inline-block;
    font-weight: 600;
    margin: 0px;
  }
`

const Body = Style.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(195px, 195px));
  grid-template-rows: 120px;
  align-items: stretch;
  grid-gap: 22.4px;

  img {
    margin-left: 20px;
    width: 40px;
  }
`

const LodingIndicator = Style.span`
  align-self: center;
  justify-self: center;

  @keyframes donut-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  div {
    display: inline-block;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-bottom-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: donut-spin 2s linear infinite;
  }
`

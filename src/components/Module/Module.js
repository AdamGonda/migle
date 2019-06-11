import React from 'react'
import Style from 'styled-components'
import Item from './Item'
import AddNewIcon from './assets/add new board icon.svg'

const Module = ({ name, icon, items, moduleAction, isEmpty, match }) => {
  const itemsOrLoading = () => {
    return items ? (
      items.map((item, idx) => (
        <Item
          key={item.id}
          id={item.id}
          type={item.type}
          name={item.name}
          animationDelay={idx}
        />
      ))
    ) : (
      <LodingIndicator>
        <div />
      </LodingIndicator>
    )
  }

  const showActionBtnConditionaly = () => {
    return !moduleAction ? null : (
      <img
        style={{ cursor: 'pointer' }}
        alt="add new"
        src={AddNewIcon}
        onClick={moduleAction}
      />
    )
  }

  const isParentsItems = () => !isEmpty(items) && items[0].parent == match.params.id

  const showItems = () => {
    if (isEmpty && match) {
      if (isParentsItems()) {
        return <>{itemsOrLoading()}</>
      }
    } else {
      return (
        <>
          {itemsOrLoading()}
          {showActionBtnConditionaly()}
        </>
      )
    }
  }

  return (
    <Wrapper>
      <Title>
        {icon}
        <p>{name}</p>
      </Title>
      <Body>{showItems()}</Body>
    </Wrapper>
  )
}

export default Module

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

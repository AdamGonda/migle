import React from 'react'
import Style from 'styled-components'
import FullStarIcon from './assets/full star icon.svg'
import BvIcon from './assets/bussines value icon.svg'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigateTo, LINK } from '../../redux/actions/locations'

const Item = ({ id, type, name, navigateTo, animationDelay }) => {  
  return (
    <Wrapper animationDelay={animationDelay}>
      <span>...</span>
      <NavLink
        style={{ textDecoration: 'none' }}
        to={`${type}/${id}`}
        onClick={() => navigateTo({ id, name, type }, LINK, {})}
      >
        <Top>
          <p>{name}</p>
        </Top>
      </NavLink>

      <Bottom>
        <Info>
          <img alt="Star" src={BvIcon} />
          <p>8200</p>
        </Info>

        <img alt="Star" src={FullStarIcon} />
      </Bottom>
    </Wrapper>
  )
}

export default connect(
  null,
  { navigateTo }
)(Item)

const Wrapper = Style.div`
  border: 1px solid white;
  color: var(--dark-text-color);
  text-align: center;
  padding: 21px;
  background-color: var(--box-color);
  border-radius: 7px;
  font-size: 17px;
  font-weight: 500;
  text-align: left;

  animation: showUp ${props => 0.5 + (props.animationDelay * 0.5)}s;

  @keyframes showUp {
    0% {
      transform: translate(0px, -20px);
      opacity: 0;
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }

  span {
    visibility: hidden;
    display: none;
  }

  :hover {
    span {
      font-size: 20px;
      float: right;
      margin-top: -22px;
      margint-left: 40px;
      visibility: visible;
      display: inline;
    }

    span:hover {
      cursor: pointer;
    }
  }

  p {
    margin: 5px 0px 0px 0px;
  }

`

const Info = Style.div`
  display: flex;
  align-items: center;

  img {
    margin: 0px 5px 0px 0px !important;
    width: 100px !important;
  }

  p {
    display: inline;
    margin: 0px !important;
  }
`

const Top = Style.div`
  height: 40px;
  color: var(--dark-text-color);
`

const Bottom = Style.div`
  display: grid;
  grid-template-rows: 30px;
  grid-template-columns: repeat(4, 1fr);
  align-items: end;
  height: 40px;
  
  p {
    display: inline-block;
    float: left;
    grid-column: span 3;
    font-size: 12px;
  }

  img {
    width: 12px !important;
    float: right;
    grid-column: -1;
    margin-bottom: 2px;
  }
`

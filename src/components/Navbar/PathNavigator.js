import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Style from 'styled-components'
import HomeIcon from './assets/home icon.svg'
import { navigateTo, NAVBAR } from '../../redux/actions/locations'

const PathNavigator = ({ history, locations, navigateTo, location: routerLocation }) => {
  const displayLinks = (location, idx) => {
    if (idx === 0) {
      return (
        <img
          key={idx}
          alt="Home"
          src={HomeIcon}
          onClick={() => {
            navigateTo(location, NAVBAR, { idx, history, from: location })
          }}
        />
      )
    } else {
      return (
        <React.Fragment key={idx}>
          <div
            onClick={() => {
              navigateTo(location, NAVBAR, { idx: idx + 1, history, from: location })
            }}
          >
            {location.name}
          </div>
          {idx < locations.length - 1 ? <span>|</span> : null}
        </React.Fragment>
      )
    }
  }

  return <Wrapper>{locations.map(displayLinks)}</Wrapper>
}

const mapStateToProps = state => {
  return {
    locations: state.locations
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { navigateTo }
  )(PathNavigator)
)

const Wrapper = Style.div`
  display: flex;
  align-items: center;
  margin-right: -100px;

  img {
    width: 44px;
    border-radius: 30px;
    margin-right: 10px;
  }

  div, span {
    font-size: 18px;
    font-weight: 400;
    margin: 0px 6px;
    color: white;
    text-decoration: none;

  }

  div:hover, img:hover {
    cursor: pointer;
  }

  span {
    font-size: 25px;
    margin-top: -6px;
  }
`

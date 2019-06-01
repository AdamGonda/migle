import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Style from 'styled-components'
import HomeIcon from './assets/home icon.svg'
import { navigateToLocation, NAVBAR } from '../../redux/actions/locations'

const PathNavigator = ({ history, locations, navigateToLocation }) => {
  const goTo = (location, idx) => {
    let goToPath = ''
    if (location.path === 'project') {
      goToPath = `/${location.path}/${location.id}`
    } else if (location.path === 'feature-set') {
      goToPath = `/project/${location.path}/${location.id}`
    } else if (location.path === 'sprint') {
      goToPath = `/project/feature-set/${location.path}/${location.id}`
    } else if (location.path === 'story') {
      goToPath = `/project/feature-set/sprint/${location.id}`
    }

    history.push(goToPath)
  }

  const displayLinks = (location, idx) => {
    if(idx == 0){
      return (
        <img
        alt='Home'
        src={HomeIcon}
        onClick={() =>
          navigateToLocation(idx, { name: location.name, path: location.path }, NAVBAR)
        }
      />
      )
    }
    else {
      return (
        <>
          <div
            onClick={() =>
              navigateToLocation(
                idx + 1,
                { name: location.name, path: location.path },
                NAVBAR
              )
            }
          >
            {location.name}
          </div>
          {idx < locations.length - 1 ? <span>|</span> : null}
        </>
      )
    }
  }

  return (
    <Wrapper>
      {locations.map(displayLinks)}
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    locations: state.locations
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { navigateToLocation }
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

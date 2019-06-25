import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Wrapper } from './styles/PathNavigator'
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

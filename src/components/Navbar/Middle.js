import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Style from 'styled-components'
import HomeIcon from './assets/home icon.svg'

const Middle = ({ history, locations, clickOnNavLink }) => {
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
    clickOnNavLink(idx)
  }

  return (
    <Wrapper>
      <img alt='home' src={HomeIcon} onClick={() => goTo('/', 0)} />

      {locations.map((location, idx) => {
        return (
          <>
            <div onClick={() => goTo(location, idx + 1)}>{location.name}</div>
            {idx < locations.length - 1 ? <span>|</span> : null}
          </>
        )
      })}
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    locations: state.locations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickOnNavLink: idx =>
      dispatch({
        type: 'navigate with bar',
        payload: { idx }
      })
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Middle)
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

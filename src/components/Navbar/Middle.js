import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from 'styled-components'
import profilePicture from '../../dummy data/profile pictures/bob.png'

export default () => {
  const project = `Projects`
  const featureSet = `Feature sets`
  const sprint = `Sprints`
  return (
    <Wrapper>
      <img src={profilePicture} />
      <NavLink exact to="/project">
        {project}
      </NavLink>
      <span>|</span>
      <NavLink exact to="/feature-set">
        {featureSet}
      </NavLink>
      <span>|</span>
      <NavLink exact to="/sprint">
        {sprint}
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = Style.div`
  display: flex;
  align-items: center;
  margin-right: -100px;

  img {
    width: 44px;
    border-radius: 30px;
    margin-right: 10px;
  }

  a, span {
    font-size: 18px;
    font-weight: 400;
    margin: 0px 6px;
    color: white;
    text-decoration: none;

  }

  span {
    font-size: 25px;
    margin-top: -6px;
  }
`

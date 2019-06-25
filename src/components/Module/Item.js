import React from 'react'
import { Wrapper, Info, Top, Bottom } from './styles/Item'
import FullStarIcon from './assets/full star icon.svg'
import BvIcon from './assets/bussines value icon.svg'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { navigateTo, LINK } from '../../redux/actions/locations'

const Item = ({
  id,
  type,
  name,
  navigateTo,
  businessValue,
  showStar,
  animationDelay
}) => {
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
          {businessValue && (
            <>
              <img alt="Star" src={BvIcon} />
              <p>{businessValue}</p>
            </>
          )}
        </Info>

        {showStar && <img alt="Star" src={FullStarIcon} />}
      </Bottom>
    </Wrapper>
  )
}

export default connect(
  null,
  { navigateTo }
)(Item)

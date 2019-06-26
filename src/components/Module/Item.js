import React from 'react'
import {
  Wrapper,
  Info,
  Top,
  Bottom,
  ContextMenuBtn,
  AddToStarredBtn,
  RemoveStarredBtn
} from './styles/Item'
import FullStarIcon from './assets/full star icon.svg'
import OutlinedStar from './assets/outlined star icon.svg'
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
  animationDelay,
  starAction
}) => {
  return (
    <Wrapper animationDelay={animationDelay}>
      <ContextMenuBtn>...</ContextMenuBtn>
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

        {showStar && showStar ? (
          <RemoveStarredBtn>
            <img onClick={starAction} alt="Star" src={FullStarIcon} />
          </RemoveStarredBtn>
        ) : (
          <AddToStarredBtn>
            <img onClick={starAction} alt="Star" src={OutlinedStar} />
          </AddToStarredBtn>
        )}
      </Bottom>
    </Wrapper>
  )
}

export default connect(
  null,
  { navigateTo }
)(Item)

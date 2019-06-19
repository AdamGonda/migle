import React from 'react'
import {
  BusinessValue,
  JustId,
  Wrapper,
  Description
} from './styles/StoryPreview'
import BusinessValueIcon from './assets/businessValue.svg'

const StoryPreview = ({ description, businessValue, idForUsers }) => {
  return (
    <Wrapper>
      <JustId>{idForUsers}</JustId>
      <Description>{description && description.substring(0, 150)}</Description>
      <BusinessValue>
        <img src={BusinessValueIcon} />
        {businessValue}
      </BusinessValue>
    </Wrapper>
  )
}

export default StoryPreview

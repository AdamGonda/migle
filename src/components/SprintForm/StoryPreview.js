import React from 'react'
import {
  BusinessValue,
  JustId,
  Wrapper,
  Description
} from './styles/StoryPreview'
import BusinessValueIcon from './assets/businessValue.svg'

const StoryPreview = ({ descriptionLimit, description, businessValue, idForUsers }) => {
  const truncate = description => {
    if(description){
      return description.length > descriptionLimit ? description.substring(0, descriptionLimit) + '...' : description
    }
  }
  return (
    <Wrapper>
      <JustId>{idForUsers}</JustId>
      <Description>{truncate(description)}</Description>
      <BusinessValue>
        <img src={BusinessValueIcon} />
        {businessValue}
      </BusinessValue>
    </Wrapper>
  )
}

export default StoryPreview

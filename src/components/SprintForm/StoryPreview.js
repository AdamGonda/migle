import React from 'react'
import Style from 'styled-components'
import BusinessValueIcon from './assets/businessValue.svg'

const StoryPreview = ({ description, businessValue, idForUsers }) => {
  return (
    <Wrapper>
      <JustId>{idForUsers}</JustId>
      <Description>{description.substring(0, 150)}</Description>
      <BusinessValue>
        <img src={BusinessValueIcon} />
        {businessValue}
      </BusinessValue>
    </Wrapper>
  )
}

export default StoryPreview

const BusinessValue = Style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #2D4D60;
  border-radius: 25px;
  padding: 10px 18px;
  font-size: 24px;

  img {
    width: 20px;
    margin-right: 10px;
  }
`

const JustId = Style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49px;
  height: 49px;
  border: 1.5px solid #2D4D60;
  border-radius: 30px;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
`

const Wrapper = Style.div`
  display: flex;
  align-items: center;
  justify-content:space-between; 
  background-color: #DFE1E6;
  border-radius: 25px;
  color: var(--dark-text-color);
  padding: 10px 40px 10px 30px;
  height: 70px;
  font-size: 12px;
  font-weight: 500;
`
const Description = Style.div`
  word-wrap: break-word
  width: 320px;
`

const Estimation = Style.div`
   
   font-weight: 500;
`

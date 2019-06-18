import React from 'react'
import Style from 'styled-components'

const StoryPreview = ({description, estimation, businessValue}) => {
  return (
    <Wrapper>
      <Description>{description}</Description>
       {/*<Estimation>{estimation}</Estimation>
      
      <Estimation>{businessValue}</Estimation> */}
    </Wrapper>
  )
}

export default StoryPreview

const Wrapper = Style.div`
  display: flex;
  align-items: center;
  justify-content:space-between; 
  background-color: #DFE1E6;
  border-radius: 25px;
  padding: 0px 22px 0px 20px;
  color: var(--dark-text-color);
  padding: 10px 30px;
  height: 70px;
  font-size: 12px;
  font-weight: 500;
`
const Description = Style.div`
  max-width: 60vw;
`

const Estimation = Style.div`
   
   font-weight: 500;
`
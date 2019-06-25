import React from 'react'
import { Wrapper, Estimation, Responsible, Status, PickUpStory } from './styles/Story'
import { BusinessValue } from './styles/StoryPreview'
import StatusIndicator1 from './assets/status indicator 1.svg'
import StatusIndicator2 from './assets/status indicator 2.svg'
import StatusIndicator3 from './assets/status indicator 3.svg'
import StatusIndicator4 from './assets/status indicator 4.svg'
import IdAndDependencies from './IdAndDependencies'
import Description from './Description'
import PickUpStoryIcon from './assets/pickUpStory.svg'
import BusinessValueIcon from './assets/businessValue.svg'

export default ({
  id,
  dependencies,
  description,
  estimation,
  responsible,
  businessValue,
  status
}) => {
  const calculateStatusBarImage = () => {
    switch (status) {
      case 'New':
        return StatusIndicator1
      case 'In progress':
        return StatusIndicator2
      case 'Review':
        return StatusIndicator3
      case 'Done':
        return StatusIndicator4
      default:
        return StatusIndicator1
    }
  }

  return (
    <Wrapper>
      {status != 'New' ? (
        <IdAndDependencies id={id} dependencies={dependencies} />
      ) : (
        <PickUpStory><img src={PickUpStoryIcon} /></PickUpStory>
      )}
      <Description description={description} />
      {/* <Estimation>{estimation}</Estimation> */}
      {responsible && (
        <Responsible>
          <img alt="responsible" src={responsible.img} />
          <p>{responsible.name}</p>
        </Responsible>
      )}

      <BusinessValue>
        <img src={BusinessValueIcon} />
        {businessValue}
      </BusinessValue>

      <Status>
        <p>{status}</p>
        <img alt="status indicator" src={calculateStatusBarImage()} />
      </Status>
    </Wrapper>
  )
}

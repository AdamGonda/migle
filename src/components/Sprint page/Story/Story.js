import React from 'react'
import {
  Wrapper,
  Description,
  Estimation,
  Responsible,
  Status,
  PickUpStory,
  BusinessValue,
  Bobo
} from './styles/Story'
import StatusIndicator1 from './assets/status indicator 1.svg'
import StatusIndicator2 from './assets/status indicator 2.svg'
import StatusIndicator3 from './assets/status indicator 3.svg'
import StatusIndicator4 from './assets/status indicator 4.svg'
import IdAndDependencies from './IdAndDependencies'
import PickUpStoryIcon from './assets/pickUpStory.svg'
import BusinessValueIcon from './assets/businessValue.svg'
import EstimationIcon from './assets/estimation Icon.svg'

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

  const charLimit = 80

  return (
    <Wrapper>
      {status != 'New' ? (
        <IdAndDependencies id={id} dependencies={dependencies} />
      ) : (
        <PickUpStory>
          <img src={PickUpStoryIcon} />
        </PickUpStory>
      )}

      <Description>
        {description.length > charLimit ? (
          <>
            <p>
              {description.substring(0, charLimit)}
              <span>...</span>
            </p>
          </>
        ) : (
          <p>{description}</p>
        )}
      </Description>

      
      <Estimation>
        <img src={EstimationIcon} />
        10
      </Estimation>

      <BusinessValue>
        <img src={BusinessValueIcon} />
        {businessValue}
      </BusinessValue>

      {!status ? null : (
        <Status>
          <p>{status}</p>
          <img alt="status indicator" src={calculateStatusBarImage()} />
        </Status>
      )}
      
    </Wrapper>
  )
}

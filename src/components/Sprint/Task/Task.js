import React from 'react'
import Style from 'styled-components'
import ProfilePicture from '../../../dummy data/profile pictures/Olivia.png'
import StatusIndicator1 from './assets/status indicator 1.svg'
import StatusIndicator2 from './assets/status indicator 2.svg'
import StatusIndicator3 from './assets/status indicator 3.svg'
import StatusIndicator4 from './assets/status indicator 4.svg'
import Separator from './assets/separator.svg'
import IdAndDependencies from './IdAndDependencies'
import Story from './Story';

export default ({
  id,
  dependencies,
  story,
  estimation,
  responsible,
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
    }
  }

  return (
    <Wrapper>
      <IdAndDependencies id={id} dependencies={dependencies} />
      <Story story={story}/>
      <img src={Separator} style={SeparatorStyle} />

      <Estimation>{estimation}</Estimation>

      <img src={Separator} style={SeparatorStyle} />
      <Responsible>
        <img src={ProfilePicture} />
        <p>{responsible}</p>
      </Responsible>

      <img src={Separator} style={SeparatorStyle} />

      <Status>
        <p>{status}</p>
        <img src={calculateStatusBarImage()} />
      </Status>
    </Wrapper>
  )
}

const SeparatorStyle = {
  height: '45px'
}

const Wrapper = Style.div`
    display: flex;
    align-items: center;
    justify-content:space-between; 
    background-color: #DFE1E6;
    height: 76px;
    border-radius: 25px;
    margin: 9.7px 0px;
    padding: 0px 22px 0px 20px;
`

const Estimation = Style.div`
   font-size: 23px;
   font-weight: 500;
`

const Responsible = Style.div`
    text-align: center;

    img {
        border-radius: 20px;
        widht: 34px;
        height: 34px;
        margin-bottom: -3px;
    }

    p {
        margin: 0px;
        font-weight: 600;
        font-size: 13px;
    }
`

const Status = Style.div`
    text-align: center;

    p {
        font-size: 22px;
        margin: 0px;
        margin-bottom: 5px;
    }

    img {
        width: 117px;   
    }
`

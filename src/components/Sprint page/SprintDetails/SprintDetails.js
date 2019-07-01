import React from 'react'
import Bubble from './Bubble'
import CompletedIcon from './assets/completed icon.svg'
import Week from './Week'
import Chart from './Chart'
import { Wrapper, Header, Body } from './styles/SprintDetails'

export default ({sprint}) => {
  const dummyDays = [
    { name: 'Monday', ideal: 50.8, remaining: 60.8 },
    { name: 'Tuesday', ideal: 40, remaining: 45 },
    { name: 'Wednesday', ideal: 30.1, remaining: 30 },
    { name: 'Thursday', ideal: 10.8, remaining: 2 }
  ]

  const calcStoriesLeft = () => {
    if(sprint){
      return `${sprint.totalNumberOfTasks - sprint.tasksLeft}/${sprint.totalNumberOfTasks}`
    }
    return `-/-`
  }

  return (
    <Wrapper>
      <Header>
        <Bubble
          title={
            <img
              alt='completed'
              src={CompletedIcon}
              style={{ width: '1.3vw', margin: '0px 3.5px -1px -6px' }}
            />
          }
          number={calcStoriesLeft()}
        />
        <Bubble title={'Ideal'} number={'58'} />
        <Bubble title={'Estimation'} number={'60.8'} />
      </Header>
      <Body>
        <Week days={dummyDays} />
        <Chart ideal={[60, 50, 40, 0]} remaining={[55, 45, 35, 0]} />
      </Body>
    </Wrapper>
  )
}

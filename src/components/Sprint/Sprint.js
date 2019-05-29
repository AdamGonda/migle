import React from 'react'
import Style from 'styled-components'
import Task from './Task/Task'
import SprintDetails from './SprintDetails/SprintDetails'
import tasks from '../../dummy data/tasks'

export default () => {
  return (
    <Wrapper>
      <Left>
        {tasks.map(task => {
          return (
            <Task
              id={task.id}
              dependencies={task.dependencies}
              story={task.story}
              estimation={task.estimation}
              responsible={task.responsible}
              status={task.status}
            />
          )
        })}
      </Left>
      <Right>
        <SprintDetails />
      </Right>
    </Wrapper>
  )
}

const Wrapper = Style.div`
  display: flex;
  padding: 15px 10px;
  color: #2D4D60;
`

const Left = Style.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0px 15px;
`

const Right = Style.div`
  width: 40%;
  padding: 10px 15px;
`

import React from 'react'
import Style from 'styled-components'
import SprintModal from './SprintModal';

const ControlPanel = ({ match }) => {

  const [showModal, setShowModal] = React.useState(false)

  return (
    <Wrapper>
      <Controll>
        <NewSprintBtn onClick={() => setShowModal(true)}>Create new sprint</NewSprintBtn>
        {showModal ? <SprintModal match={match}/> : null}
      </Controll>
      <Messages>Message board</Messages>
    </Wrapper>
  )
}

export default ControlPanel

const Wrapper = Style.div`
  grid-column: controll;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
`

const NewSprintBtn = Style.button`
  width: 100%
  height: 100%
  color: var(--dark-text-color);
  background: var(--box-color);
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 5px;

  :hover {
    background: white;
    cursor: pointer;
  }
`

const Controll = Style.div`
  margin-top: 10px;
  grid-row: 1 / 4;
  padding: 10px 0px;
`

const Messages = Style.div`
  border: 3px solid #D89393;
  grid-row: 4 / -2;
`

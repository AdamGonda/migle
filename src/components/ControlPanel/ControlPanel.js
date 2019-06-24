import React from 'react'
import { PrimaryBtn } from '../shared styles/buttons'
import Style from 'styled-components'
import Modal from './Modal'

const ControlPanel = ({ match }) => {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <Wrapper>
      <Controll>
        <PrimaryBtn
          style={{ width: '100%', height: '100%' }}
          onClick={() => setShowModal(true)}
        >
          Create new sprint
        </PrimaryBtn>
        {showModal ? (
          <Modal match={match} closeModal={() => setShowModal(false)} />
        ) : null}
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

const Controll = Style.div`
  margin-top: 10px;
  grid-row: 1 / 4;
  padding: 10px 0px;
`

const Messages = Style.div`
  border: 3px solid #D89393;
  grid-row: 4 / -2;
`

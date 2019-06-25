import React from 'react'
import { PrimaryBtn } from '../shared styles/buttons'
import { Wrapper, Controll, Messages } from './styles/ControllPanel'

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
      {/* <Messages>Message board</Messages> */}
    </Wrapper>
  )
}

export default ControlPanel

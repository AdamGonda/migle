import React from 'react'
import { Wrapper } from './styles/Modal'

import SprintForm from '../SprintForm/SprintForm'

const SprintModal = ({ match, closeModal }) => {
  return (
    <Wrapper>
      <SprintForm match={match} closeModal={closeModal} />
    </Wrapper>
  )
}

export default SprintModal



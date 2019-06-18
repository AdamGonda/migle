import React from 'react'
import Style from 'styled-components'
import { createSprint } from '../../redux/actions/sprint'
import { connect } from 'react-redux'
import NewSprintForm from '../NewSprintForm/NewSprintForm'

const SprintModal = ({ createSprint, match, closeModal }) => {
  const [showNewSprintForm, setShowNewSprintForm] = React.useState(true)

  return (
    <Wrapper>
      {showNewSprintForm ? (
        <NewSprintForm
          createSprint={createSprint}
          match={match}
          closeModal={closeModal}
          showNewStoryForm={() => setShowNewSprintForm(false)}
        />
      ) : (
        <p>add new story</p>
      )}
    </Wrapper>
  )
}

const mapDispatchToPorps = dispatch => {
  return {
    createSprint: (name, owner, stories) =>
      dispatch(createSprint({ name, owner, stories }))
  }
}

export default connect(
  null,
  mapDispatchToPorps
)(SprintModal)

const Wrapper = Style.div`
  display: grid; 
  grid-template-rows: 300px 1fr;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 104, 178, 0.9);
  z-index: 1;
  color: white;
  animation: showUp 0.2s ease-in;

  @keyframes showUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

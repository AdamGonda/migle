import React from 'react'
import Style from 'styled-components'
import { connect } from 'react-redux'
import { createSprint } from '../../redux/actions/sprint'

const ControlPanel = ({createSprint, match}) => {
  return (
    <Wrapper>
      <Controll>
        <button onClick={() => createSprint("test sprint", match.params.id)}>Create new sprint</button>
      </Controll>
      <Messages>Message board</Messages>
    </Wrapper>
  )
}

const mapStateToPops = state => {
  return {}
}

const mapDispatchToPorps = dispatch => {
  return {
    createSprint: (name, owner) => dispatch(createSprint({name, owner}))
  }
}

export default connect(
  mapStateToPops,
  mapDispatchToPorps
)(ControlPanel)

const Wrapper = Style.div`
  grid-column: controll;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
`

const Controll = Style.div`
  margin-top: 10px;
  grid-row: 1 / 4;
  padding: 10px 0px;

  button {
    width: 100%
    height: 100%
    color: var(--dark-text-color);
    background: white;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border-radius:15px;
  }
`

const Messages = Style.div`
  border: 3px solid #D89393;
  grid-row: 4 / -2;
`

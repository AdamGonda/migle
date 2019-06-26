import React from 'react'
import Style from 'styled-components'

export default ({ placeholder, value, onTitleChange, onSprintLengthChange }) => {
  return (
    <Wrapper>
      <Input placeholder={placeholder} value={value} onChange={onTitleChange} />
      <SprintLength onChange={onSprintLengthChange} >
        <option value={1}>1 week</option>
        <option value={2}>2 weeks</option>
        <option value={3}>3 weeks</option>
      </SprintLength>
    </Wrapper>
  )
}

const Wrapper = Style.div`
  grid-column: 2;
  justify-self: center;
  align-self: start;  
  position: relative;
`

const SprintLength = Style.select`
  font-size: 15px;
  height: 35px;
  position: absolute;
  border: none;
  right: 8px;
  top: 1px;
  z-index: 1;

  :focus {
    outline:none;
  }
`

const Input = Style.input`
  padding: 0px 15px;
  font-size: 15px;
  height: 37px;
  width: 497px;
  border: none;
`

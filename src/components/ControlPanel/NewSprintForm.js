import React from 'react'
import Style from 'styled-components'

const NewSprintForm = ({ submit, cancel }) => {
  const initialState = {
    description: '',
    estimation: '',
    businessValue: ''
  }
  const [state, setState] = React.useState(initialState)

  const ERROR_MSG = 'required'
  const NO_ERROR_STATE = {
    description: false,
    estimation: false,
    businessValue: false
  }
  const [emptyError, setEmptyError] = React.useState(NO_ERROR_STATE)

  const handleChange = e => {
    setEmptyError(NO_ERROR_STATE)
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Wrapper>
      <Form>
        <input
          name="description"
          placeholder={
            emptyError.description == false ? 'User story...' : ERROR_MSG
          }
          onChange={handleChange}
        />
        <input
          name="estimation"
          placeholder={
            emptyError.estimation == false ? 'Estimation...' : ERROR_MSG
          }
          onChange={handleChange}
        />
        <input
          name="businessValue"
          placeholder={
            emptyError.businessValue == false ? 'Business value...' : ERROR_MSG
          }
          onChange={handleChange}
        />
        <button
          onClick={() => {
            setEmptyError({
              ...emptyError,
              description: state.description == '' ? true : false,
              estimation: state.estimation == '' ? true : false,
              businessValue: state.businessValue == '' ? true : false
            })

            if (
              state.description != '' &&
              state.estimation != '' &&
              state.businessValue != ''
            ) {
              submit(state.description, state.estimation, state.businessValue)
            }
          }}
        >
          Add
        </button>
        <button onClick={cancel}>Remove</button>
      </Form>
    </Wrapper>
  )
}

export default NewSprintForm

const Form = Style.div`
  display: flex;
  align-items: center;
  justify-content:space-between; 
  background-color: #DFE1E6;
  height: 76px;
  border-radius: 25px;
  margin: 9.7px 0px;
  padding: 0px 22px 0px 20px;
`

const Wrapper = Style.div`
display: flex;
`

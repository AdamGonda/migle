import React from 'react'
import { MainBtn, Panel, SubmitBtn, CancelBtn, Input } from './styles/ActionBtn'
import AddNewIcon from './assets/add new board icon.svg'
import SubmitIcon from './assets/submit icon.svg'
import CloseIcon from './assets/close icon.svg'

const ActionBtn = ({ action }) => {
  const [isOpend, setIsOpend] = React.useState(false)
  const [name, setName] = React.useState('')
  const [emptyNameError, setEmptyNameError] = React.useState(false)
  const emptyNameErrorMsg = 'required'

  const showActionBtn = () => {
    return (
      <Panel>
        <MainBtn src={AddNewIcon} onClick={() => setIsOpend(true)} />
      </Panel>
    )
  }

  const showInput = () => {
    return (
      <Panel>
        <Input
          placeholder={emptyNameError ? emptyNameErrorMsg : 'name'}
          onChange={e => {
            setEmptyNameError(false)
            setName(e.target.value)
          }}
        />
        <div>
          <SubmitBtn
            src={SubmitIcon}
            onClick={() => {
              if (!name == '') {
                action(name)
                setIsOpend(false)
              }
              setEmptyNameError(true)
            }}
          />
          <CancelBtn
            src={CloseIcon}
            onClick={() => {
              setIsOpend(false)
              setEmptyNameError(false)
            }}
          />
        </div>
      </Panel>
    )
  }

  return isOpend ? showInput() : showActionBtn()
}

export default ActionBtn



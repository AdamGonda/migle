import React from 'react'
import Style from 'styled-components'
import AddNewIcon from './assets/add new board icon.svg'
import SubmitIcon from './assets/submit icon.svg'
import CloseIcon from './assets/close icon.svg'

const ActionBtn = ({ action }) => {
  const [isOpend, setIsOpend] = React.useState(false)
  const [name, setName] = React.useState('')
  const [emptyNameError, setEmptyNameError] = React.useState(false)
  const emptyNameErrorMsg = 'required'

  const showActionBtn = () => {
    return <Panel><MainBtn src={AddNewIcon} onClick={() => setIsOpend(true)} /></Panel>
  }

  const showInput = () => {
    return (
      <Panel>
        
          <Input placeholder={emptyNameError ? emptyNameErrorMsg : 'name'} onChange={e => {
            setEmptyNameError(false)
            setName(e.target.value)
          }} />
          <div>
            <SubmitBtn
              src={SubmitIcon}
              onClick={() => {
                if(!name == ''){
                  action(name)
                  setIsOpend(false)
                }
                setEmptyNameError(true)
              }}
            />
            <CancelBtn src={CloseIcon} onClick={() => {
              setIsOpend(false)
              setEmptyNameError(false)
              }} />
          </div>
          
      </Panel>
    )
  }

  return isOpend ? showInput() : showActionBtn()
}

export default ActionBtn

const MainBtn = Style.img`
  :hover {
    cursor: pointer;
  }
`

const Panel = Style.div`
  display: flex ;
  align-items: center;
  width: 350px;
  animation: ShowUp 1.3s ease-in;

  @keyframes ShowUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`

const SubmitBtn = Style.img`
  margin: 4px 0px 0px 4px !important;
  animation: btnShowUp 0.4s ease-in;

  @keyframes btnShowUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  
`

const CancelBtn = Style.img`
  margin: 4px 0px 0px 3px !important;
  animation: btnShowUp 0.4s ease-in;

  @keyframes btnShowUp {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  
`

const Input = Style.input`
  height: 36.5px;
  width: 150px;
  display: inline !important;
  border: none !important;
  text-align: center;
  font-size: 18px;
  margin-left: 20px;
  animation: open .4s;
  padding: 0px 10px;

  @keyframes open {
    0% {
      width: 0px;
      opacity: 0;
    }

    100% {
      width: 150px;
      opacity: 1;
    }
  }
`

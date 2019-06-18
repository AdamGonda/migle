import React from 'react'
import Style from 'styled-components'

const Header = ({closeModal}) => {
  return (
    <Wrapper>
      <Top>
        <h1>Sprint</h1>
        <button onClick={closeModal}>X</button>
      </Top>
      
      <Bottom>
        <SprintTitleInput placeholder='Title...'/>
        <button>Add story</button>
      </Bottom>
    </Wrapper>
  )
}

export default Header

const Wrapper = Style.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  width: 100%;
`

const Bottom = Style.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 0.3fr 0.3fr;

  button {
    margin-top: 25px;
    grid-row: 2;
    grid-column: 2;
    align-self: center;
    justify-self: center;
    font-size: 18px;
    background: rgba(0,0,0,0);
    border: 1.5px solid white;
    color: white;
    padding: 7px 29px;
  
    :hover {
      cursor: pointer;
    }
  }
`

const SprintTitleInput = Style.input`
  grid-column: 2;
  height: 37px;
  width: 497px;
  align-self: start;
  font-size: 15px;
  padding: 0px 15px;
`

const Top = Style.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  height: 100%;
  
  h1 {
    grid-column: 2;
    place-self: center;
    font-weight: 500;
    font-size: 40px;
    margin: 0px;
  }

  button {
    align-self: center;
    justify-self: end;
    margin-right: 50px;

    font-weight: 600;
    font-size: 18px;
    width: 34px;
    height: 34px;
    border: 2px solid white;
    color: white;
    background: rgba(0,0,0,0);
    text-align: center;
    grid-column: 3;
  
    :hover {
      cursor: pointer;
    }
  }
`

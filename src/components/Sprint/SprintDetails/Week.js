import React from 'react'
import Style from 'styled-components'

export default ({ days }) => {
  return (
    <Wrpper>
      <Header>
        <span style={{ marginRight: '60px' }}>Ideal</span>
        <span>Remaining</span>
      </Header>
      <Body>
        <Days>
          {days.map(day => (
            <p>{day.name}</p>
          ))}
        </Days>

        <Data>
          {days.map(day => (
            <p>{day.remaining}</p>
          ))}
        </Data>
        <Data>
          {days.map(day => (
            <p>{day.ideal}</p>
          ))}
        </Data>
      </Body>
    </Wrpper>
  )
}

const Wrpper = Style.div`
    background-color: #DFE1E6;
    border-radius: 25px;
    border-radius: 25px 25px 0px 0px;
    padding: 25px 35px;
`

const Header = Style.div`
    display: flex;
    justify-content: flex-end;
`

const Body = Style.div`
    font-size: 30.5px;
`

const Days = Style.div`
    
    display: inline-block;

    p {
        margin: 10px 0px; 
    }
`

const Data = Style.div`
    display: inline-block;
    float:right;
    margin: 0px 20px;

    p {
        margin: 10px 0px; 
    }
`

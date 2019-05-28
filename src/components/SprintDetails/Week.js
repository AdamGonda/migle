import React from 'react';
import Style from 'styled-components';

export default ({days}) => {
    return (
        <Wrpper>
            <Header>
                <span style={{marginRight: '60px'}}>Ideal</span>
                <span>Remaining</span>
            </Header>
            <Body>
                <Days>
                    {days.map(day => 
                        <div>
                            <span>{day.name}</span>
                            <span>{day.ideal}</span>
                            <span>{day.remaining}</span>
                        </div>
                    )}
                </Days>
            </Body>
        </Wrpper>
    )
}

const Wrpper = Style.div`
    background-color: #DFE1E6;
    border-radius: 25px;
    border-radius: 25px 25px 0px 0px;
    padding: 18px 35px;
`

const Header = Style.div`
    display: flex;
    justify-content: flex-end;
`

const Body = Style.div`
    
`

const Days = Style.div`
    font-size: 30.5px;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px; 
    }
`
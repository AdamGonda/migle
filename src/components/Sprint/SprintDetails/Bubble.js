import React from 'react'
import Style from 'styled-components';

export default ({title, number}) => {
    return (
        <Wrapper>
            <Title>
                {title}
            </Title>
            <Number>
                {number}
            </Number>
        </Wrapper>
    )
}

const Wrapper = Style.div`
    background-color: #DFE1E6;
    border-radius: 30px;
    font-size: 20px;
    padding: 10px 25px;
    display: inline-block;
`

const Title = Style.span`
    font-size: 20px;
    margin-right: 10px;
`

const Number = Style.span`
    font-size: 25px;
    font-weight: 500;
`
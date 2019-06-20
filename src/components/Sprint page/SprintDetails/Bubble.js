import React from 'react'
import Style from 'styled-components'

export default ({ title, number }) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<Number>{number}</Number>
		</Wrapper>
	)
}

const Wrapper = Style.div`
    background-color: #DFE1E6;
    border-radius: 30px;
    padding: 10px 25px;
    display: inline-block;
    text-align: center;
`

const Title = Style.span`
    font-size: 1.4vw;
    margin-right: 10px;
`

const Number = Style.span`
    font-size: 1.6vw;
    font-weight: 500;
`

import React from 'react'
import { Wrapper, Title, Number} from './styles/Bubble'

export default ({ title, number }) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<Number>{number}</Number>
		</Wrapper>
	)
}

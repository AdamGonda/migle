import React from 'react'
import Style from 'styled-components'
import Background from './assets/confetti.png'

import Hero from './Hero'
import CTA from './CTA'
import Scroll from './Scroll'

const Landing = () => {
  return (
    <Wrapper>
      <Hero title={'fun, easy'} subtitle={'project management'} />
      <CTA signUpAction={()=>console.log('sign up')} loginAction={()=>console.log('login')}/>
      <Scroll />
    </Wrapper>
  )
}

export default Landing

const Wrapper = Style.section`
    height: 100%;    
    width: 100%;  
    display: grid;
    grid-template-rows: repead(10, 1fr);
    justify-content: center;

    background-color: #0094FF;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    justify-items: center;
`

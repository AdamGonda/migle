import React from 'react'
import { Wrapper } from './styles/Hero'
import HeroImg from './assets/hero.svg'

export default ({ title, subtitle }) => (
  <Wrapper>
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
    <img src={HeroImg} />
  </Wrapper>
)

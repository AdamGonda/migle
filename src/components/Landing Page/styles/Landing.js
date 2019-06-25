import Style from 'styled-components'
import Background from '../assets/confetti.png'

export const Wrapper = Style.section`
  height: 100%;    
  width: 100%;  
  display: grid;
  grid-template-rows: repead(10, 1fr);
  justify-content: center;

  background-color: var(--nav-bar-color);
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  justify-items: center;
`
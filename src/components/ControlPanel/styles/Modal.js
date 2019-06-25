import Style from 'styled-components'

export const Wrapper = Style.div`
  display: grid; 
  grid-template-rows: 300px 1fr;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 104, 178, 0.9);
  z-index: 1;
  color: white;
`
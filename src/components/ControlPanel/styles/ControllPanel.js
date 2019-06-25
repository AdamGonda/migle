import Style from 'styled-components'

export const Wrapper = Style.div`
  grid-column: controll;
  display: grid;
  grid-template-rows: repeat(24, 1fr);
`

export const Controll = Style.div`
  margin-top: 10px;
  grid-row: 1 / 4;
  padding: 10px 0px;
`

export const Messages = Style.div`
  border: 3px solid #D89393;
  grid-row: 4 / -2;
`
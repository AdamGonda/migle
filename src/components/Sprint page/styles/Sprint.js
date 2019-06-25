import Style from 'styled-components'

export const Wrapper = Style.div`
  display: flex;
  padding: 15px 10px;
  color: var(--dark-text-color);
`

export const Left = Style.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0px 15px;
`

export const Right = Style.div`
  width: 40%;
  padding: 10px 15px;
`
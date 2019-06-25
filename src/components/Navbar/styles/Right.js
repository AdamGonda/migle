import Style from 'styled-components'

const spaceBetween = 35

export const Wrapper = Style.div`
  display: flex;
  align-items: center;
`

export const MessageBtn = Style.img`
  width: 34px;
  margin-bottom: -5px;
  margin-left: ${spaceBetween}px;
`

export const TeamBtn = Style.img`
  width: 40px;
  margin-left: ${spaceBetween}px;
`

export const MainBtn = Style.img`
  width: 44px;
  margin-left: ${spaceBetween}px;
`

export const SignOutBtn = Style.p`
  font-size: 18px;
  font-weight: 500;

  :hover {
    cursor: pointer;
  }
`